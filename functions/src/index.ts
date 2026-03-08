import * as path from "path";
import * as fs from "fs";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import { validateInquiryPayload } from "./utils/validation";
import { SmtpConfigError } from "./errors/inquiryErrors";
import { logError } from "./utils/logger";

dotenv.config();

if (!admin.apps.length) {
  const keyPath = path.join(__dirname, "..", "serviceAccountKey.json");
  if (fs.existsSync(keyPath)) {
    const serviceAccount = require(keyPath);
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  } else {
    admin.initializeApp();
  }
}

const db = admin.firestore();

function getSmtpConfig() {
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.INQUIRY_TO_EMAIL || smtpUser;

  if (!smtpUser || !smtpPass) {
    throw new SmtpConfigError({ message: "SMTP_USER or SMTP_PASS not configured" });
  }

  return { smtpHost, smtpPort, smtpUser, smtpPass, toEmail };
}

export const sendInquiryEmail = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const validation = validateInquiryPayload(req.body);

  if (!validation.success) {
    const errorMessage =
      validation.error.field === "phone"
        ? "연락처는 필수입니다."
        : validation.error.field === "name"
          ? "신청자명은 필수입니다."
          : "입력값을 확인해주세요.";
    res.status(400).json({ error: errorMessage });
    return;
  }

  const { name, phone, email = "", message = "" } = validation.data;

  let smtpConfig;
  try {
    smtpConfig = getSmtpConfig();
  } catch (err) {
    functions.logger.error("SMTP config error", err);
    res.status(500).json({
      error: "이메일 설정이 완료되지 않았습니다. Firebase Console에서 환경 변수를 설정해주세요.",
    });
    return;
  }

  const { smtpHost, smtpPort, smtpUser, toEmail } = smtpConfig;
  const { smtpPass } = smtpConfig;

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 1) 관리자에게 문의 내용 전달
    await transporter.sendMail({
      from: `"분양퍼스트 문의" <${smtpUser}>`,
      to: toEmail,
      subject: `[분양퍼스트] 홈페이지 제작 문의 - ${name}`,
      text: [
        `신청자명: ${name}`,
        `연락처: ${phone}`,
        `이메일: ${email || "(미입력)"}`,
        ``,
        `문의 내용:`,
        message || "(미입력)",
      ].join("\n"),
      html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a56db;">분양퍼스트 홈페이지 제작 문의</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold; width: 120px;">신청자명</td><td style="padding: 8px; border: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">연락처</td><td style="padding: 8px; border: 1px solid #eee;">${phone}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">이메일</td><td style="padding: 8px; border: 1px solid #eee;">${email || "(미입력)"}</td></tr>
        </table>
        ${message ? `<h3 style="margin-top: 20px;">문의 내용</h3><p style="white-space: pre-wrap;">${message}</p>` : ""}
      </div>
    `,
    });

    // 2) 고객에게 접수 확인 이메일 (이메일 주소가 있을 때만)
    if (email && email.trim()) {
      await transporter.sendMail({
        from: `"분양퍼스트" <${smtpUser}>`,
        to: email.trim(),
        subject: "[분양퍼스트] 문의가 접수되었습니다",
        text: [
          `${name}님, 안녕하세요.`,
          ``,
          `분양퍼스트에 문의해 주셔서 감사합니다.`,
          `고객님의 문의가 정상적으로 접수되었습니다.`,
          ``,
          `빠른 시일 내에 담당자가 연락드리겠습니다.`,
          ``,
          `---`,
          `분양퍼스트`,
        ].join("\n"),
        html: `
        <div style="font-family: 'Malgun Gothic', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="color: #1a56db; font-size: 24px; margin: 0;">분양퍼스트</h1>
          </div>
          <div style="background: #f8fafc; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
            <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">${name}님, 안녕하세요.</p>
            <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.6;">분양퍼스트에 문의해 주셔서 감사합니다.</p>
            <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.6; font-weight: bold; color: #1a56db;">고객님의 문의가 정상적으로 접수되었습니다.</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.6;">빠른 시일 내에 담당자가 연락드리겠습니다.</p>
          </div>
          <p style="margin: 0; font-size: 13px; color: #64748b;">본 메일은 발신 전용입니다.</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
          <p style="margin: 0; font-size: 12px; color: #94a3b8;">© 분양퍼스트</p>
        </div>
      `,
      });
    }

    await db.collection("inquiries").add({
      name,
      phone,
      email: email || null,
      message: message || null,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).json({ success: true, message: "문의가 접수되었습니다." });
  } catch (err) {
    logError("Email send failed", err);
    functions.logger.error("Email send failed", err);
    res.status(500).json({ error: "이메일 발송에 실패했습니다. 잠시 후 다시 시도해주세요." });
  }
});

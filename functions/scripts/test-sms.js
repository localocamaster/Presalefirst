/**
 * SOLAPI 문자 발송 테스트 스크립트
 * node functions/scripts/test-sms.js
 * (functions/.env의 SOLAPI 값 사용)
 */
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const { SolapiMessageService } = require("solapi");

const apiKey = process.env.SOLAPI_API_KEY;
const apiSecret = process.env.SOLAPI_API_SECRET;
const senderPhone = process.env.SOLAPI_SENDER_PHONE;
const testPhone = process.argv[2] || process.env.SOLAPI_SENDER_PHONE; // 테스트 수신번호

if (!apiKey || !apiSecret || !senderPhone) {
  console.error("❌ .env에 SOLAPI_API_KEY, SOLAPI_API_SECRET, SOLAPI_SENDER_PHONE 설정 필요");
  process.exit(1);
}

console.log("발송 시도:", { from: senderPhone, to: testPhone });

const messageService = new SolapiMessageService(apiKey, apiSecret);

messageService
  .send({
    to: testPhone.replace(/\D/g, ""),
    from: senderPhone,
    text: "[분양퍼스트] 테스트 문자입니다. 문의 접수 확인용입니다.",
  })
  .then((res) => {
    console.log("✅ 발송 성공:", JSON.stringify(res, null, 2));
  })
  .catch((err) => {
    console.error("❌ 발송 실패:", err?.message || err);
    if (err?.response?.data) console.error("응답:", err.response.data);
    process.exit(1);
  });

/**
 * 문의 페이로드 검증
 * solapi-nodejs-master 패턴: Effect Schema 활용
 */

import { Schema } from "effect";
import { InquiryValidationError } from "../errors/inquiryErrors";

/** 전화번호 스키마 - 하이픈 제거, 숫자만 허용 (SOLAPI 형식: 01012345678) */
const phoneNumberSchema = Schema.String.pipe(
  Schema.transform(Schema.String, {
    decode: (s) => s.replace(/\D/g, ""),
    encode: (s) => s,
  }),
  Schema.filter((s) => s.length >= 10, {
    message: () => "연락처는 10자리 이상이어야 합니다.",
  })
);

/** 문의 페이로드 스키마 */
const rawInquirySchema = Schema.Struct({
  name: Schema.String.pipe(
    Schema.filter((s) => s.trim().length > 0, {
      message: () => "신청자명은 필수입니다.",
    })
  ),
  phone: phoneNumberSchema,
  email: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});

export const inquiryPayloadSchema = rawInquirySchema.pipe(
  Schema.transform(
    Schema.Struct({
      name: Schema.String,
      phone: Schema.String,
      email: Schema.String,
      message: Schema.String,
    }),
    {
      decode: (raw) => ({
        name: raw.name.trim(),
        phone: raw.phone,
        email: (raw.email ?? "").trim(),
        message: (raw.message ?? "").trim(),
      }),
      encode: (v) => v,
    }
  )
);

export type InquiryPayload = Schema.Schema.Type<typeof inquiryPayloadSchema>;

export function validateInquiryPayload(
  body: unknown
): { success: true; data: InquiryPayload } | { success: false; error: InquiryValidationError } {
  if (!body || typeof body !== "object") {
    return {
      success: false,
      error: new InquiryValidationError({
        field: "body",
        reason: "Request body is required",
      }),
    };
  }

  try {
    const data = Schema.decodeUnknownSync(inquiryPayloadSchema)(body);
    return { success: true, data };
  } catch (e) {
    const message = e instanceof Error ? e.message : "입력값을 확인해주세요.";
    return {
      success: false,
      error: new InquiryValidationError({
        field: "body",
        reason: message,
      }),
    };
  }
}

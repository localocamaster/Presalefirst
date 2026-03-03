"use strict";
/**
 * 문의 페이로드 검증
 * solapi-nodejs-master 패턴: Effect Schema 활용
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.inquiryPayloadSchema = void 0;
exports.validateInquiryPayload = validateInquiryPayload;
const effect_1 = require("effect");
const inquiryErrors_1 = require("../errors/inquiryErrors");
/** 전화번호 스키마 - 하이픈 제거, 숫자만 허용 (SOLAPI 형식: 01012345678) */
const phoneNumberSchema = effect_1.Schema.String.pipe(effect_1.Schema.transform(effect_1.Schema.String, {
    decode: (s) => s.replace(/\D/g, ""),
    encode: (s) => s,
}), effect_1.Schema.filter((s) => s.length >= 10, {
    message: () => "연락처는 10자리 이상이어야 합니다.",
}));
/** 문의 페이로드 스키마 */
const rawInquirySchema = effect_1.Schema.Struct({
    name: effect_1.Schema.String.pipe(effect_1.Schema.filter((s) => s.trim().length > 0, {
        message: () => "신청자명은 필수입니다.",
    })),
    phone: phoneNumberSchema,
    email: effect_1.Schema.optional(effect_1.Schema.String),
    message: effect_1.Schema.optional(effect_1.Schema.String),
});
exports.inquiryPayloadSchema = rawInquirySchema.pipe(effect_1.Schema.transform(effect_1.Schema.Struct({
    name: effect_1.Schema.String,
    phone: effect_1.Schema.String,
    email: effect_1.Schema.String,
    message: effect_1.Schema.String,
}), {
    decode: (raw) => ({
        name: raw.name.trim(),
        phone: raw.phone,
        email: (raw.email ?? "").trim(),
        message: (raw.message ?? "").trim(),
    }),
    encode: (v) => v,
}));
function validateInquiryPayload(body) {
    if (!body || typeof body !== "object") {
        return {
            success: false,
            error: new inquiryErrors_1.InquiryValidationError({
                field: "body",
                reason: "Request body is required",
            }),
        };
    }
    try {
        const data = effect_1.Schema.decodeUnknownSync(exports.inquiryPayloadSchema)(body);
        return { success: true, data };
    }
    catch (e) {
        const message = e instanceof Error ? e.message : "입력값을 확인해주세요.";
        return {
            success: false,
            error: new inquiryErrors_1.InquiryValidationError({
                field: "body",
                reason: message,
            }),
        };
    }
}
//# sourceMappingURL=validation.js.map
"use strict";
/**
 * 연락처 정규화 유틸
 * SOLAPI 요구사항: 01012345678 형식 (숫자만, +,-,* 특수문자 불가)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePhone = normalizePhone;
exports.isValidPhoneFormat = isValidPhoneFormat;
const NON_DIGIT_REGEX = /\D/g;
function normalizePhone(phone) {
    return phone.replace(NON_DIGIT_REGEX, "");
}
function isValidPhoneFormat(phone) {
    const normalized = normalizePhone(phone);
    return normalized.length >= 10;
}
//# sourceMappingURL=phone.js.map
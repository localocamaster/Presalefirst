/**
 * 연락처 정규화 유틸
 * SOLAPI 요구사항: 01012345678 형식 (숫자만, +,-,* 특수문자 불가)
 */

const NON_DIGIT_REGEX = /\D/g;

export function normalizePhone(phone: string): string {
  return phone.replace(NON_DIGIT_REGEX, "");
}

export function isValidPhoneFormat(phone: string): boolean {
  const normalized = normalizePhone(phone);
  return normalized.length >= 10;
}

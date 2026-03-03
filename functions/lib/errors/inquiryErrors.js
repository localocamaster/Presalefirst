"use strict";
/**
 * 문의 처리 관련 커스텀 에러
 * solapi-nodejs-master 패턴: Data.TaggedError 활용
 * - Production: 간결한 메시지
 * - Development: 상세 정보
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsSendError = exports.SmsConfigError = exports.SmtpConfigError = exports.InquiryValidationError = void 0;
const effect_1 = require("effect");
class InquiryValidationError extends effect_1.Data.TaggedError("InquiryValidationError") {
    toString() {
        if (process.env.NODE_ENV === "production") {
            return `InquiryValidationError: Invalid ${this.field}`;
        }
        return `InquiryValidationError: ${this.field} - ${this.reason}`;
    }
}
exports.InquiryValidationError = InquiryValidationError;
class SmtpConfigError extends effect_1.Data.TaggedError("SmtpConfigError") {
    toString() {
        if (process.env.NODE_ENV === "production") {
            return "SmtpConfigError: Email configuration failed";
        }
        return `SmtpConfigError: ${this.message}`;
    }
}
exports.SmtpConfigError = SmtpConfigError;
class SmsConfigError extends effect_1.Data.TaggedError("SmsConfigError") {
    toString() {
        if (process.env.NODE_ENV === "production") {
            return "SmsConfigError: SOLAPI config not set";
        }
        return `SmsConfigError: SOLAPI env vars not set${this.hint ? ` - ${this.hint}` : ""}`;
    }
}
exports.SmsConfigError = SmsConfigError;
class SmsSendError extends effect_1.Data.TaggedError("SmsSendError") {
    toString() {
        if (process.env.NODE_ENV === "production") {
            return "SmsSendError: SMS delivery failed";
        }
        const causeStr = this.cause instanceof Error ? this.cause.message : String(this.cause);
        return `SmsSendError: ${this.message} - ${causeStr}`;
    }
}
exports.SmsSendError = SmsSendError;
//# sourceMappingURL=inquiryErrors.js.map
/**
 * 문의 처리 관련 커스텀 에러
 * solapi-nodejs-master 패턴: Data.TaggedError 활용
 * - Production: 간결한 메시지
 * - Development: 상세 정보
 */

import { Data } from "effect";

export class InquiryValidationError extends Data.TaggedError("InquiryValidationError")<{
  readonly field: string;
  readonly reason: string;
}> {
  override toString(): string {
    if (process.env.NODE_ENV === "production") {
      return `InquiryValidationError: Invalid ${this.field}`;
    }
    return `InquiryValidationError: ${this.field} - ${this.reason}`;
  }
}

export class SmtpConfigError extends Data.TaggedError("SmtpConfigError")<{
  readonly message: string;
}> {
  override toString(): string {
    if (process.env.NODE_ENV === "production") {
      return "SmtpConfigError: Email configuration failed";
    }
    return `SmtpConfigError: ${this.message}`;
  }
}

export class SmsConfigError extends Data.TaggedError("SmsConfigError")<{
  readonly hint?: string;
}> {
  override toString(): string {
    if (process.env.NODE_ENV === "production") {
      return "SmsConfigError: SOLAPI config not set";
    }
    return `SmsConfigError: SOLAPI env vars not set${this.hint ? ` - ${this.hint}` : ""}`;
  }
}

export class SmsSendError extends Data.TaggedError("SmsSendError")<{
  readonly message: string;
  readonly cause?: unknown;
}> {
  override toString(): string {
    if (process.env.NODE_ENV === "production") {
      return "SmsSendError: SMS delivery failed";
    }
    const causeStr = this.cause instanceof Error ? this.cause.message : String(this.cause);
    return `SmsSendError: ${this.message} - ${causeStr}`;
  }
}

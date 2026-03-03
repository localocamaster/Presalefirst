import { describe, it, expect } from "vitest";
import { validateInquiryPayload } from "./validation";
import { InquiryValidationError } from "../errors/inquiryErrors";

describe("validateInquiryPayload", () => {
  it("should return success for valid payload with name and phone", () => {
    const result = validateInquiryPayload({
      name: "홍길동",
      phone: "010-1234-5678",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("홍길동");
      expect(result.data.phone).toBe("01012345678"); // Schema 정규화: 숫자만
    }
  });

  it("should return success with optional email and message", () => {
    const result = validateInquiryPayload({
      name: "홍길동",
      phone: "01012345678",
      email: "test@example.com",
      message: "문의 내용",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe("test@example.com");
      expect(result.data.message).toBe("문의 내용");
    }
  });

  it("should return error when name is missing", () => {
    const result = validateInquiryPayload({
      phone: "01012345678",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error).toBeInstanceOf(InquiryValidationError);
      expect(result.error.reason).toMatch(/name|신청자명|missing|필수/);
    }
  });

  it("should return error when phone is missing", () => {
    const result = validateInquiryPayload({
      name: "홍길동",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.reason).toMatch(/phone|연락처|missing|필수|10자리/);
    }
  });

  it("should return error when body is null", () => {
    const result = validateInquiryPayload(null);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.field).toBe("body");
    }
  });

  it("should return error when body is not object", () => {
    const result = validateInquiryPayload("invalid");

    expect(result.success).toBe(false);
  });

  it("should trim whitespace from name and phone", () => {
    const result = validateInquiryPayload({
      name: "  홍길동  ",
      phone: "  01012345678  ",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("홍길동");
      expect(result.data.phone).toBe("01012345678");
    }
  });
});

import { describe, it, expect } from "vitest";
import { normalizePhone, isValidPhoneFormat } from "./phone";

describe("normalizePhone", () => {
  it("should remove dashes from phone number", () => {
    expect(normalizePhone("010-1234-5678")).toBe("01012345678");
  });

  it("should remove spaces from phone number", () => {
    expect(normalizePhone("010 1234 5678")).toBe("01012345678");
  });

  it("should remove all non-digit characters", () => {
    expect(normalizePhone("010-1234-5678")).toBe("01012345678");
    expect(normalizePhone("0507-1339-3982")).toBe("050713393982");
    expect(normalizePhone("(02) 1234-5678")).toBe("0212345678");
  });

  it("should return digits only for already clean input", () => {
    expect(normalizePhone("01012345678")).toBe("01012345678");
  });

  it("should handle empty string", () => {
    expect(normalizePhone("")).toBe("");
  });
});

describe("isValidPhoneFormat", () => {
  it("should return true for valid 10+ digit phone", () => {
    expect(isValidPhoneFormat("01012345678")).toBe(true);
    expect(isValidPhoneFormat("010-1234-5678")).toBe(true);
    expect(isValidPhoneFormat("050713393982")).toBe(true);
  });

  it("should return false for too short phone", () => {
    expect(isValidPhoneFormat("123")).toBe(false);
    expect(isValidPhoneFormat("010123")).toBe(false);
  });

  it("should return false for empty string", () => {
    expect(isValidPhoneFormat("")).toBe(false);
  });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const phone_1 = require("./phone");
(0, vitest_1.describe)("normalizePhone", () => {
    (0, vitest_1.it)("should remove dashes from phone number", () => {
        (0, vitest_1.expect)((0, phone_1.normalizePhone)("010-1234-5678")).toBe("01012345678");
    });
    (0, vitest_1.it)("should remove spaces from phone number", () => {
        (0, vitest_1.expect)((0, phone_1.normalizePhone)("010 1234 5678")).toBe("01012345678");
    });
    (0, vitest_1.it)("should remove all non-digit characters", () => {
        (0, vitest_1.expect)((0, phone_1.normalizePhone)("010-1234-5678")).toBe("01012345678");
        (0, vitest_1.expect)((0, phone_1.normalizePhone)("0507-1339-3982")).toBe("050713393982");
        (0, vitest_1.expect)((0, phone_1.normalizePhone)("(02) 1234-5678")).toBe("0212345678");
    });
    (0, vitest_1.it)("should return digits only for already clean input", () => {
        (0, vitest_1.expect)((0, phone_1.normalizePhone)("01012345678")).toBe("01012345678");
    });
    (0, vitest_1.it)("should handle empty string", () => {
        (0, vitest_1.expect)((0, phone_1.normalizePhone)("")).toBe("");
    });
});
(0, vitest_1.describe)("isValidPhoneFormat", () => {
    (0, vitest_1.it)("should return true for valid 10+ digit phone", () => {
        (0, vitest_1.expect)((0, phone_1.isValidPhoneFormat)("01012345678")).toBe(true);
        (0, vitest_1.expect)((0, phone_1.isValidPhoneFormat)("010-1234-5678")).toBe(true);
        (0, vitest_1.expect)((0, phone_1.isValidPhoneFormat)("050713393982")).toBe(true);
    });
    (0, vitest_1.it)("should return false for too short phone", () => {
        (0, vitest_1.expect)((0, phone_1.isValidPhoneFormat)("123")).toBe(false);
        (0, vitest_1.expect)((0, phone_1.isValidPhoneFormat)("010123")).toBe(false);
    });
    (0, vitest_1.it)("should return false for empty string", () => {
        (0, vitest_1.expect)((0, phone_1.isValidPhoneFormat)("")).toBe(false);
    });
});
//# sourceMappingURL=phone.test.js.map
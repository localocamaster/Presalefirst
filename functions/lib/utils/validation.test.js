"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const validation_1 = require("./validation");
const inquiryErrors_1 = require("../errors/inquiryErrors");
(0, vitest_1.describe)("validateInquiryPayload", () => {
    (0, vitest_1.it)("should return success for valid payload with name and phone", () => {
        const result = (0, validation_1.validateInquiryPayload)({
            name: "홍길동",
            phone: "010-1234-5678",
        });
        (0, vitest_1.expect)(result.success).toBe(true);
        if (result.success) {
            (0, vitest_1.expect)(result.data.name).toBe("홍길동");
            (0, vitest_1.expect)(result.data.phone).toBe("01012345678"); // Schema 정규화: 숫자만
        }
    });
    (0, vitest_1.it)("should return success with optional email and message", () => {
        const result = (0, validation_1.validateInquiryPayload)({
            name: "홍길동",
            phone: "01012345678",
            email: "test@example.com",
            message: "문의 내용",
        });
        (0, vitest_1.expect)(result.success).toBe(true);
        if (result.success) {
            (0, vitest_1.expect)(result.data.email).toBe("test@example.com");
            (0, vitest_1.expect)(result.data.message).toBe("문의 내용");
        }
    });
    (0, vitest_1.it)("should return error when name is missing", () => {
        const result = (0, validation_1.validateInquiryPayload)({
            phone: "01012345678",
        });
        (0, vitest_1.expect)(result.success).toBe(false);
        if (!result.success) {
            (0, vitest_1.expect)(result.error).toBeInstanceOf(inquiryErrors_1.InquiryValidationError);
            (0, vitest_1.expect)(result.error.reason).toMatch(/name|신청자명|missing|필수/);
        }
    });
    (0, vitest_1.it)("should return error when phone is missing", () => {
        const result = (0, validation_1.validateInquiryPayload)({
            name: "홍길동",
        });
        (0, vitest_1.expect)(result.success).toBe(false);
        if (!result.success) {
            (0, vitest_1.expect)(result.error.reason).toMatch(/phone|연락처|missing|필수|10자리/);
        }
    });
    (0, vitest_1.it)("should return error when body is null", () => {
        const result = (0, validation_1.validateInquiryPayload)(null);
        (0, vitest_1.expect)(result.success).toBe(false);
        if (!result.success) {
            (0, vitest_1.expect)(result.error.field).toBe("body");
        }
    });
    (0, vitest_1.it)("should return error when body is not object", () => {
        const result = (0, validation_1.validateInquiryPayload)("invalid");
        (0, vitest_1.expect)(result.success).toBe(false);
    });
    (0, vitest_1.it)("should trim whitespace from name and phone", () => {
        const result = (0, validation_1.validateInquiryPayload)({
            name: "  홍길동  ",
            phone: "  01012345678  ",
        });
        (0, vitest_1.expect)(result.success).toBe(true);
        if (result.success) {
            (0, vitest_1.expect)(result.data.name).toBe("홍길동");
            (0, vitest_1.expect)(result.data.phone).toBe("01012345678");
        }
    });
});
//# sourceMappingURL=validation.test.js.map
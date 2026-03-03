"use strict";
/**
 * 문의 접수 확인 SMS 발송 서비스
 * solapi-nodejs-master 패턴: Effect.gen + runPromiseExit
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendInquiryConfirmationSms = sendInquiryConfirmationSms;
const effect_1 = require("effect");
const Effect = require("effect/Effect");
const solapi_1 = require("solapi");
const functions = require("firebase-functions");
const phone_1 = require("../utils/phone");
const logger_1 = require("../utils/logger");
const inquiryErrors_1 = require("../errors/inquiryErrors");
function getSolapiConfig() {
    const config = functions.config();
    const apiKey = process.env.SOLAPI_API_KEY || config.solapi?.api_key;
    const apiSecret = process.env.SOLAPI_API_SECRET || config.solapi?.api_secret;
    const senderPhone = process.env.SOLAPI_SENDER_PHONE || config.solapi?.sender_phone;
    if (!apiKey || !apiSecret || !senderPhone) {
        return null;
    }
    return { apiKey, apiSecret, senderPhone };
}
/** Effect 기반 SMS 발송 - solapi-nodejs-master MessageService.send 패턴 */
function sendSmsEffect(normalizedPhone, customerName, config) {
    return Effect.gen(function* (_) {
        const messageService = new solapi_1.SolapiMessageService(config.apiKey, config.apiSecret);
        yield* _(Effect.tryPromise({
            try: () => messageService.send({
                to: normalizedPhone,
                from: config.senderPhone,
                text: `[분양퍼스트] ${customerName}님, 문의가 접수되었습니다. 담당자가 빠른 시일 내에 연락드리겠습니다.`,
            }),
            catch: (err) => new inquiryErrors_1.SmsSendError({
                message: "SMS delivery failed",
                cause: err,
            }),
        }));
        (0, logger_1.logInfo)("SMS sent successfully", { to: normalizedPhone });
    });
}
/** Effect → Promise 변환 (solapi-nodejs-master runPromiseExit 패턴) */
async function sendInquiryConfirmationSms(toPhone, customerName) {
    const solapiConfig = getSolapiConfig();
    if (!solapiConfig) {
        functions.logger.warn("SMS skipped: SOLAPI env vars not set");
        return { sent: false, reason: "config_missing" };
    }
    const normalizedPhone = (0, phone_1.normalizePhone)(toPhone);
    if (normalizedPhone.length < 10) {
        functions.logger.warn("SMS skipped: invalid phone format", {
            toPhone: normalizedPhone,
            original: toPhone,
        });
        return { sent: false, reason: "invalid_phone" };
    }
    functions.logger.info("SMS attempt", {
        to: normalizedPhone,
        from: solapiConfig.senderPhone,
        name: customerName,
    });
    const effect = sendSmsEffect(normalizedPhone, customerName, solapiConfig);
    const exit = await Effect.runPromiseExit(effect);
    return effect_1.Exit.match(exit, {
        onFailure: (cause) => {
            const failure = effect_1.Cause.failureOption(cause);
            const errMsg = failure._tag === "Some"
                ? failure.value instanceof Error
                    ? failure.value.message
                    : String(failure.value)
                : effect_1.Cause.pretty(cause);
            functions.logger.error("SMS send failed", {
                to: normalizedPhone,
                error: errMsg,
                cause: failure._tag === "Some" ? String(failure.value) : undefined,
            });
            return { sent: false, reason: "send_failed" };
        },
        onSuccess: () => {
            functions.logger.info("SMS sent successfully", { to: normalizedPhone });
            return { sent: true };
        },
    });
}
//# sourceMappingURL=smsService.js.map
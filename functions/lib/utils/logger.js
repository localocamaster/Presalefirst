"use strict";
/**
 * 구조화된 로깅
 * - Production: 최소 정보
 * - Development: 상세 정보
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.logWarn = exports.logInfo = void 0;
function formatLogMessage(level, message, context) {
    const base = {
        level,
        message,
        timestamp: new Date().toISOString(),
    };
    if (process.env.NODE_ENV === "production") {
        return { ...base, ...context };
    }
    return { ...base, context };
}
const logInfo = (message, context) => {
    const formatted = formatLogMessage("info", message, context);
    console.info(JSON.stringify(formatted));
};
exports.logInfo = logInfo;
const logWarn = (message, context) => {
    const formatted = formatLogMessage("warn", message, context);
    console.warn(JSON.stringify(formatted));
};
exports.logWarn = logWarn;
const logError = (message, error, context) => {
    const formatted = process.env.NODE_ENV === "production"
        ? formatLogMessage("error", message, { ...context })
        : {
            ...formatLogMessage("error", message, context),
            error: error instanceof Error ? { name: error.name, message: error.message } : error,
            stack: error instanceof Error ? error.stack : undefined,
        };
    console.error(JSON.stringify(formatted));
};
exports.logError = logError;
//# sourceMappingURL=logger.js.map
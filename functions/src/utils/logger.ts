/**
 * 구조화된 로깅
 * - Production: 최소 정보
 * - Development: 상세 정보
 */

type LogContext = Record<string, unknown>;

function formatLogMessage(
  level: string,
  message: string,
  context?: LogContext
): Record<string, unknown> {
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

export const logInfo = (message: string, context?: LogContext): void => {
  const formatted = formatLogMessage("info", message, context);
  console.info(JSON.stringify(formatted));
};

export const logWarn = (message: string, context?: LogContext): void => {
  const formatted = formatLogMessage("warn", message, context);
  console.warn(JSON.stringify(formatted));
};

export const logError = (message: string, error?: unknown, context?: LogContext): void => {
  const formatted =
    process.env.NODE_ENV === "production"
      ? formatLogMessage("error", message, { ...context })
      : {
          ...formatLogMessage("error", message, context),
          error: error instanceof Error ? { name: error.name, message: error.message } : error,
          stack: error instanceof Error ? error.stack : undefined,
        };
  console.error(JSON.stringify(formatted));
};

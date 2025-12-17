const logger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const status = res.statusCode; // Get the HTTP status code
    const duration = Date.now() - start; // Calculate the total duration in ms

    let logMethod;
    let logType;

    if (status >= 500) {
      // 5xx status codes (Server Errors) -> Use console.error
      logMethod = console.error;
      logType = "Error";
    } else if (status >= 400) {
      // 4xx status codes (Client Errors) -> Use console.warn
      logMethod = console.warn;
      logType = "Warn";
    } else {
      // All other codes (1xx, 2xx, 3xx) -> Use console.log
      logMethod = console.log;
      logType = "Ok";
    }

    logMethod(
      `[${status}-${logType}] ${req.method} ${
        req.host ? req.host : "unknown-host"
      }${req.url} (${duration}ms)`
    );
  });

  next();
};
export default logger;

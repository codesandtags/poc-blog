const winston = require("winston"); // for transports.Console

const myFormat = winston.format.printf(
  ({ level, label, message, timestamp, meta }) => {
    const metaFormatted = meta !== undefined ? `\n${JSON.stringify(meta)}` : "";

    return `${timestamp} ${label} ${level}: ${message} ${metaFormatted}`;
  }
);

const loggerFormat = winston.format.combine(
  winston.format.json(),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.align(),
  winston.format.label({ label: "[comments-api]" }),
  myFormat,
  winston.format.colorize({ all: true })
);

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: loggerFormat,
    }),
  ],
});

const customLevel = (req, res) => {
  var level = "";
  if (res.statusCode >= 100) {
    level = "info";
  }
  if (res.statusCode >= 400) {
    level = "warn";
  }
  if (res.statusCode >= 500) {
    level = "error";
  }
  // Ops is worried about hacking attempts so make Unauthorized and Forbidden critical
  if (res.statusCode == 401 || res.statusCode == 403) {
    level = "critical";
  }
  // No one should be using the old path, so always warn for those
  if (req.path === "/v1" && level === "info") {
    level = "warn";
  }
  return level;
};

const winstonConfig = {
  winstonInstance: logger,
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
  level: customLevel,
  bodyWhitelist: ["data"],
};

module.exports = {
  winstonConfig,
  logger,
};

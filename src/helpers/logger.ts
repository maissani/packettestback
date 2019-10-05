import { createLogger, format, transports } from "winston";
const { label, combine, timestamp , prettyPrint } = format;
// This action aims to create a logger that save errors to error.log and info to info.log
// We can add a custom logger pipe here in the future
const logger = createLogger({
  exitOnError: false,
  format: combine(
        timestamp(),
        prettyPrint(),
      ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "./error.log" , level: "error"  }),
    new transports.File({ filename: "./info.log" , level: "info"  }),
  ],
});

export default logger;

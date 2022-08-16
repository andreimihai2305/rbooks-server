import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import { Request, Response, NextFunction } from "express";

export const log = async (message: String, logFileName: string) => {
  const dateTime = format(new Date(), "yyyyMMdd\tHH:mm:ss");
  const logEntry = `${dateTime}\t${uuid()}\t${message}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fs.mkdir(path.join(__dirname, "..", "logs"), () =>
        console.log("Created logs folder")
      );
      await fsPromises.appendFile(
        path.join(__dirname, "..", "logs", logFileName),
        logEntry
      );
    }
  } catch (error) {
    console.log(error);
  }
};

const logger = (req: Request, res: Response, next: NextFunction) => {
  log(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLogs.log");
  console.log(`${req.method} ${req.path}`);
  next();
};

export default logger;

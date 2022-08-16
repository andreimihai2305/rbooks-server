import { Request, Response } from "express";
import { log } from "./logger";

const errorHandler = (err: Error, req: Request, res: Response) => {
  log(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errorLogs.log"
  );

  console.log(err.stack);
  const status = res.statusCode ? res.statusCode : 500;

  return res.status(status).json({ message: err.message });
};

export default errorHandler;

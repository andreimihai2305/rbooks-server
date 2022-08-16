import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import corsOptions from "./corsOptions";
import errorHandler from "../middleware/errorHandler";
import logger from "../middleware/logger";
// Routers
import authRouter from "../routes/auth";
import authorsRouter from "../routes/authors";
import booksRouter from "../routes/books";

dotenv.config();

const app = express();

// Middleware
app.use(logger);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/books", booksRouter);
app.use("/auth", authRouter);
app.use("/authors", authorsRouter);

// For unexisting routes
app.all("*", (req: Request, res: Response) => {
  res.status(404);
  if (req.accepts("json")) return res.json({ message: "404 not found" });
  else return res.type("txt").send("404 not found");
});
// Error Handler
app.use(errorHandler);

const port: string = process.env.PORT!;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import corsOptions from "./corsOptions";
import errorHandler from "../middleware/errorHandler";
// Routers
import authRouter from "../routes/auth";
import authorsRouter from "../routes/authors";
import booksRouter from "../routes/books";

dotenv.config();

const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/books", booksRouter);
app.use("/auth", authRouter);
app.use("/authors", authorsRouter);

// Error Handler
app.use(errorHandler);

const port: string = process.env.PORT!;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

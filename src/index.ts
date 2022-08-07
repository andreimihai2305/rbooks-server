import demoBooks from "./demoBooks";
import demoUsers from "./demoUsers";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import seed from "../prisma/seed";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
seed();
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});

app.get("/books-list", (req, res) => {
  res.status(200).json(demoBooks);
  console.log(req.headers.origin, "\n");
});

app.get("/users", (req, res) => {
  res.status(200).json(demoUsers);
});

app.get("/user", (req, res) => {
  const userId: string = req.body.id;
  res.json(userId);
});

const port: string = process.env.PORT!;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

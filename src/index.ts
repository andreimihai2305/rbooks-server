import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { connect } from "http2";
import { request } from "http";

const prisma = new PrismaClient();

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});

app.get("/books-list", async (req, res) => {
  // res.status(200).json("Books");
  const books = await prisma.book.findMany();
  if (books) return res.status(200).json(books);
  return res.status(500).send("Internal server error");
});

app.post("/new-book", async (req, res) => {
  const { title, subtitle, yearPublished, authorId } = req.body;
  const book = await prisma.book.create({
    data: {
      title: title,
      yearPublished: yearPublished,
      subtitle: subtitle ?? "",
      Author: { connect: { id: authorId } },
    },
  });

  if (book) return res.status(200).json(book);

  return res.status(400).send("Bad request");
});

app.get("/authors", async (req, res) => {
  const authors = await prisma.author.findMany();
  return authors
    ? res.status(200).json(authors)
    : res.status(500).send("Server error");
});

app.get("/user", (req, res) => {
  const userId: string = req.body.id;
  res.json(userId);
});

const port: string = process.env.PORT!;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

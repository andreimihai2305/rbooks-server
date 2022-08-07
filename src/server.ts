import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { User, Book, Author } from "./interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

////////////////////////////////////////////////////////
// GET
app.get("/authors", async (req, res) => {
  const authors: Author[] = await prisma.author.findMany();
  return authors
    ? res.status(200).json(authors)
    : res.status(500).json("Server error");
});

app.get("/author/", async (req, res) => {
  const { id }: { id: string } = req.body;
  const author: Author | null = await prisma.author.findFirst({
    where: {
      id: id,
    },
    include: {
      booksWritten: true,
    },
  });

  if (author) return res.status(200).json(author);
  return res.status(400).json("Bad request");
});

app.get("/users", async (req, res) => {
  const users: User[] = await prisma.user.findMany();

  if (users) return res.status(200).json(users);
  return res.status(500).json("Internal Server error");
});

app.get("/books-list", async (req, res) => {
  const books: Book[] = await prisma.book.findMany({
    include: {
      Author: true,
    },
  });

  if (books) return res.status(200).json(books);

  return res.status(500).json("Internal server error");
});

////////////////////////////////////////////////////////
// POST
app.post("/new-book", async (req, res) => {
  const { title, subtitle, yearPublished, authorId } = req.body;

  const book: Book = await prisma.book.create({
    data: {
      title: title,
      yearPublished: yearPublished,
      subtitle: subtitle ?? "",
      Author: { connect: { id: authorId } },
    },
    include: {
      Author: true,
    },
  });

  if (book) return res.status(200).json(book);

  return res.status(400).send("Bad request");
});

app.post("/register-user", async (req, res) => {
  const { username, password }: User = req.body;
  if (!username || !password || password.length <= 5) {
    return res.status(400).json("Bad Request");
  }
  const userFromDb: User | null = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  if (userFromDb) {
    return res.status(403).json("Username already used");
  }

  const newUser: User | null = await prisma.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  if (newUser) return res.status(200).json(newUser);
  return res.status(500).json("Internal Server Error");
});

app.post("/sign-in", async (req, res) => {
  const { username, password }: User = req?.body ?? {
    username: "",
    password: "",
  };
  if (!username || !password) return res.status(400).json("Bad Request");
  const user = await prisma.user.findFirst({
    where: {
      username: username,
      password: password,
    },
  });

  if (user) return res.status(200).json(user);
  return res.status(400).json("Bad request");
});

const port: string = process.env.PORT!;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

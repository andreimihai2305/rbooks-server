import prisma from "../src/prismaClient";
import { Book } from "../src/interfaces";
import { Router } from "express";

const booksRouter = Router();

booksRouter.post("/new-book", async (req, res) => {
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

booksRouter.get("/books-list", async (req, res) => {
  const books: Book[] = await prisma.book.findMany({
    include: {
      Author: true,
    },
  });

  if (books) return res.status(200).json(books);
  return res.status(500).json("Internal server error");
});

export default booksRouter;

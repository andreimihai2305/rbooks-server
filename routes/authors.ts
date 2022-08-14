import { Router } from "express";
import { Author } from "../src/interfaces";
import prisma from "../src/prismaClient";

const authorsRouter = Router();

authorsRouter.get("/authors", async (req, res) => {
  const authors: Author[] = await prisma.author.findMany();
  return authors
    ? res.status(200).json(authors)
    : res.status(500).json("Server error");
});

authorsRouter.get("/author/", async (req, res) => {
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

export default authorsRouter;

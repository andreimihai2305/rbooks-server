import prisma from "../src/prismaClient";
import { Author } from "../interfaces";
import { Request, Response, Router } from "express";

const authorsRouter = Router();

authorsRouter.get("/authors", async (req: Request, res: Response) => {
  const authors: Author[] = await prisma.author.findMany();
  return authors
    ? res.status(200).json(authors)
    : res.status(500).json("Server error");
});

authorsRouter.get("/author/", async (req: Request, res: Response) => {
  const { id }: { id: string } = req?.body;
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

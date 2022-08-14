import prisma from "../src/prismaClient";
import { User } from "../interfaces";
import { Request, Response } from "express";

const signInController = async (req: Request, res: Response) => {
  const { username, password }: User = req?.body ?? {
    username: "",
    password: "",
  };
  if (!username || !password)
    return res.status(400).json({ error: "Bad Request" });

  const foundUser = await prisma.user.findFirst({
    where: { username: username },
    select: {
      id: true,
      username: true,
      password: false,
    },
  });

  if (!foundUser) return res.status(401).json({ error: "No user found" });
  return res.status(200).json(foundUser);
};

export default signInController;

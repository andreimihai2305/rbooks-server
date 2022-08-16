import prisma from "../src/prismaClient";
import bcrypt from "bcrypt";
import { User } from "../interfaces";
import { Request, Response } from "express";

const signInController = async (req: Request, res: Response) => {
  const { username, password }: User = req?.body ?? {
    username: "",
    password: "",
  };
  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required!" });

  const foundUser = await prisma.user.findFirst({
    where: { username: username },
    select: {
      id: true,
      username: true,
      password: true,
    },
  });

  if (!foundUser) return res.status(401).json({ message: "No user found" });

  const isMatch = await bcrypt.compare(password, foundUser?.password);

  if (isMatch) {
    return res.status(200).json({
      succes: `User ${foundUser.username} is logged in`,
      userId: foundUser.id,
    });
  }
};

export default signInController;

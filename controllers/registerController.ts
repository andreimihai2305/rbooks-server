import prisma from "../src/prismaClient";
import { User } from "../interfaces";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

const registerUserController = async (req: Request, res: Response) => {
  const { username, password }: User = req?.body;
  if (!username || !password || password.length <= 5 || username.length <= 3) {
    return res.status(400).json("Bad Request");
  }
  const userFromDb: User | null = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  if (userFromDb) {
    return res.status(409).json({ message: "Username already used" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: User | null = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });

    if (newUser) return res.status(201).json({ succes: "New user created" });
  } catch (error: any) {
    return res.status(500).json({ message: error?.message });
  }
  // return res.status(500).json("Internal Server Error");
};

export default registerUserController;

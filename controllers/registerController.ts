import prisma from "../src/prismaClient";
import bcrypt from "bcrypt";
import { User } from "../interfaces";
import { Request, Response } from "express";

const registerUserController = async (req: Request, res: Response) => {
  const { username, password }: User = req?.body;
  // Check if username and password are valid inputs
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are both required!" });
  } else if (username.length < 4 || username.length > 15) {
    return res.status(400).json({
      message: "Username must be between 4 and 15 characters long",
    });
  } else if (password.length < 8 || password.length > 30) {
    return res.status(400).json({
      message: "Password must be between 8 and 30 characters long",
    });
  }

  // Check if username is already in use
  const userFromDb: User | null = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  if (userFromDb) {
    return res.status(409).json({ message: "Username already used" });
  }

  // Add user to db
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: User | null = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });

    console.log(newUser);
    if (newUser) return res.status(201).json({ succes: "New user created" });
  } catch (error: any) {
    return res.status(500).json({ message: error?.message });
  }
  // return res.status(500).json("Internal Server Error");
};

export default registerUserController;

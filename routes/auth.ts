import { Router } from "express";
import { User } from "../src/interfaces";
import prisma from "../src/prismaClient";

const authRouter = Router();
authRouter.post("/sign-in", async (req, res) => {
  const { username, password }: User = req?.body ?? {
    username: "",
    password: "",
  };
  if (!username || !password) return res.status(400).json("Bad Request");

  const foundUser = await prisma.user.findFirst({
    where: { username: username },
  });

  if (!foundUser) return res.status(401).json({ error: "No user found" });
  return res.status(200).json(foundUser);
});

authRouter.post("/register-user", async (req, res) => {
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

export default authRouter;

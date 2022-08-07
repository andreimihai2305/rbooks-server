import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.deleteMany();
  await prisma.book.deleteMany();
  await prisma.author.deleteMany();

  let nietzsche = await prisma.author.create({
    data: { name: "Friedrich Nietzsche", birthYear: 1844, yearOfDeath: 1900 },
  });
  const jung = await prisma.author.create({
    data: { name: "Carl Gustav Jung", birthYear: 1875, yearOfDeath: 1961 },
  });

  const Books = await prisma.book.createMany({
    data: [
      {
        title: "Beyond Good and Evil",
        subtitle: "Prelude to a Philosophy of the Future",
        yearPublished: 1886,
        authorId: nietzsche.id,
      },
      {
        title: "Ecce Homo",
        subtitle: "How One Becomes What One Is",
        yearPublished: 1906,
        authorId: nietzsche.id,
      },
      {
        title: "Man and his symbols",
        yearPublished: 1906,
        authorId: jung.id,
      },
    ],
  });

  const beyondGoodAndEvil = await prisma.book.findFirst({
    where: {
      title: "Beyond Good and Evil",
    },
  });

  const andrew = await prisma.user.create({
    data: {
      username: "andrew",
      password: "helloworld",
      isAdmin: true,
      savedBooks: { connect: { id: beyondGoodAndEvil?.id } },
    },
  });
  const john = await prisma.user.create({
    data: {
      username: "john",
      password: "helloandrew",
      isAdmin: false,
      savedBooks: { connect: { id: beyondGoodAndEvil?.id } },
    },
  });
}

seed();

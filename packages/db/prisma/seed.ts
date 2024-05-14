import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { username: "ayush@gmail.com" },
    update: {},
    create: {
      username: "ayush@gmail.com",
      password: "12345678",
      firstName: "Ayush",
      lastName: "Shivhare",
      phoneNumber: "1234567891",
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 20000,
          token: "122",
          provider: "HDFC Bank",
        },
      },
    },
  });
  const bob = await prisma.user.upsert({
    where: { username: "krsna@gmail.com" },
    update: {},
    create: {
      username: "krsna@gmail.com",
      password: "12345678",
      firstName: "Krsna",
      lastName: "God",
      phoneNumber: "1234567891",
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "123",
          provider: "HDFC Bank",
        },
      },
    },
  });
  console.log({ alice, bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // process.exit(1);
  });

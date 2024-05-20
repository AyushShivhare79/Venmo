"use server";

import { PrismaClient } from "@repo/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

const prisma = new PrismaClient();

export const p2p = async (pNumber: any, amount: any) => {
  const session = await getServerSession(authOptions);
  const response = await prisma.user.findFirst({
    where: {
      phoneNumber: pNumber.toString(),
    },
  });

  const userId = Number(response?.id);

  await prisma.$transaction([
    prisma.balance.update({
      where: {
        userId: Number(userId),
      },
      data: {
        amount: { increment: Number(amount * 100) },
      },
    }),

    prisma.balance.update({
      where: {
        userId: Number(session?.user?.id),
      },
      data: {
        amount: { decrement: Number(amount * 100) },
      },
    }),
  ]);
};

"use server";

import { PrismaClient } from "@repo/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

const prisma = new PrismaClient();

export async function createOnRampTransaction(
  provider: string,
  amount: number
) {
  // Ideally the token should come from the banking provider (hdfc/axis)
  const session = await getServerSession(authOptions);
  if (!session?.user || !session.user?.id) {
    return {
      message: "Unauthenticated request",
    };
  }
  const token = (Math.random() * 1000).toString();
  await prisma.onRampTransaction.create({
    data: {
      provider,
      status: "Processing",
      startTime: new Date(),
      token: token,
      userId: Number(session?.user?.id),
      amount: amount * 100,
    },
  });
  const response = await prisma.balance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  console.log("Response hu vro: ", response);

  if (!response) {
    const balance = await prisma.balance.create({
      data: {
        userId: Number(session?.user?.id),
        amount: 0,
        locked: 0,
      },
    });
  }

  return {
    message: "Done",
  };
}

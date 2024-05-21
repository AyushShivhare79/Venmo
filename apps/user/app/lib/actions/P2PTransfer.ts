"use server";

import { PrismaClient } from "@repo/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { toast } from "react-toastify";

const prisma = new PrismaClient();

export const p2p = async (pnumber: any, amount: any) => {
  // const id = toast.loading("Pending...")
  const session = await getServerSession(authOptions);
  const response = await prisma.user.findFirst({
    where: {
      phoneNumber: pnumber.toString(),
    },
  });

  const userId = Number(response?.id);

  const to = await prisma.balance.findFirst({
    where: {
      userId: userId,
    },
  });

  if (!to) {
    await prisma.balance.create({
      data: {
        userId,
        amount: 0,
        locked: 0,
      },
    });
  }

  const from = await prisma.balance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });

  console.log("From wala hu vro: ", from);
  const fromAmount = from?.amount || 0;

  await prisma.$transaction(async (txn) => {
    if (fromAmount / 100 < amount) {
      throw new Error(`Bro what the fuck is amount`);
    }
    await txn.balance.update({
      where: {
        userId: Number(userId),
      },
      data: {
        amount: { increment: Number(amount * 100) },
      },
    }),
      await txn.balance.update({
        where: {
          userId: Number(session?.user?.id),
        },
        data: {
          amount: { decrement: Number(amount * 100) },
        },
      });

    await prisma.p2P.create({
      data: {
        fromUserId: Number(session?.user?.id),
        toUserId: Number(userId),
        startTime: new Date(),
        amount: Number(amount * 100),
      },
    });
    // toast.update(id, {
    //   render: "User created successful!",
    //   type: "success",
    //   isLoading: false,
    // });
  });
};

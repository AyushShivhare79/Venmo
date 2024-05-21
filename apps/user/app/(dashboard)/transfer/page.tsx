import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { PrismaClient } from ".prisma/client";
import { redirect } from "next/navigation";

import AddMoney from "../../components/AddMoneyCard";
import { BalanceCard } from "../../components/BalanceCard";

import { OnRampTransactions } from "../../components/OnRampTransactions";

const prisma = new PrismaClient();

const session = await getServerSession(authOptions);

// if (typeof window === "undefined") return null;

// async function userExist() {
//   if (!session) {
//     return undefined;
//   }
// }

async function getBalance() {
  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(session.user.id),
    },
  });

  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
}

async function getOnRampTransactions() {
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session.user.id),
    },
  });

  return txns.map((t) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

export default async function () {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();

  return (
    <>
      <div className="w-full">
        <div className="text-4xl text-purple-500 font-semibold pb-20">
          Transfer
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="pl-5">
            <AddMoney />
          </div>

          <div className="grid gap-4">
            <BalanceCard amount={balance.amount} locked={balance.locked} />

            <OnRampTransactions transactions={transactions} />
          </div>
        </div>
      </div>
    </>
  );
}

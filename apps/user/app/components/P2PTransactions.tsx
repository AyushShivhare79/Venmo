import { Card } from "@repo/ui/Card";
import { PrismaClient } from "@repo/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

const prisma = new PrismaClient();

const session = await getServerSession(authOptions);

const response = await prisma.p2P.findMany({
  where: {
    fromUserId: Number(session?.user?.id),
  },
});

const t = response.map((txns) => ({
  to: txns.toUserId,
  startTime: txns.startTime,
  amount: txns.amount,
}));

export const P2PTransactions = () => {
  return (
    <>
      <div>
        <Card title="Recent Transaction">
          <div>
            {t.map((t: any) => (
              <div className="flex justify-between border-b-2 pt-2">
                <div>{t.to}</div>
                <div>+ Rs {t.amount / 100}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
};

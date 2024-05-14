interface props {
  transactions: {
    time: Date;
    amount: number;
    status: string;
    provider: string;
  }[];
}
import { Card } from "@repo/ui/Card";

export const OnRampTransactions = ({ transactions }: props) => {
  if (!transactions.length) {
    return (
      <>
        <div>
          <Card title="Recent Transactions">
            <div className="flex justify-center py-5 ">
              No Recent transactions
            </div>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <Card title="Recent Transactions">
        {transactions.map((t) => (
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <div className="text-sm">Received INR</div>
              <div className="text-slate-400 text-xs">
                {t.time.toDateString()}
              </div>
            </div>
            <div>+ Rs {t.amount / 100}</div>
          </div>
        ))}
      </Card>
    </>
  );
};

import { P2PTransactions } from "../../components/P2PTransactions";
import { SendCard } from "../../components/SendCard";

export default function () {
  return (
    <>
      {/* <div className="flex justify-center flex-col h-screen">
        <div className="flex gap-5 w-4/5">
          <div className="pl-5 w-2/5">
            <SendCard />
          </div>
          <div className="w-2/5">
            <P2PTransactions />
          </div>
        </div>
      </div> */}

      <div className="flex justify-center flex-col h-screen">
        <div className="grid grid-cols-2 gap-5">
          <div className="pl-5">
            <SendCard />
          </div>
          <div className="">
            <P2PTransactions />
          </div>
        </div>
      </div>
    </>
  );
}

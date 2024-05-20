"use client";

import { Card } from "@repo/ui/Card";
import { TextInput } from "@repo/ui/TextInput";
import { useState } from "react";
import { p2p } from "../lib/actions/P2PTransfer";

export const SendCard = () => {
  const [pnumber, setPnumber] = useState<Number>();
  const [amount, setAmount] = useState<Number>();
  return (
    <Card title="Send Money">
      <TextInput
        label="Phone Number"
        placeholder="Phone Number"
        onChange={(e) => setPnumber(Number(e.target.value))}
      ></TextInput>
      <TextInput
        label="Amount"
        placeholder="Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <div className="flex justify-center">
        <button
          onClick={async () => {
            await p2p(pnumber, amount);
          }}
          className="rounded-lg bg-black text-white w-20 h-8 mt-3"
        >
          Send
        </button>
      </div>
    </Card>
  );
};

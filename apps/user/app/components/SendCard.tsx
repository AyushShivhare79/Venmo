"use client";

import { Card } from "@repo/ui/Card";
import { TextInput } from "@repo/ui/TextInput";
import { useState } from "react";
import { p2p } from "../lib/actions/P2PTransfer";
import { Button } from "@repo/ui/button";
import { toast } from "react-toastify";

export const SendCard = () => {
  const [pnumber, setPnumber] = useState<Number>();
  const [amount, setAmount] = useState<Number>();

  const handleClick = async () => {
    const id = toast.loading("Pending...");
    const data = await p2p(pnumber, amount);
  };
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
      <div className="flex justify-center pt-2">
        <Button onClick={handleClick}>Send</Button>
      </div>
    </Card>
  );
};

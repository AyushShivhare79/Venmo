"use client";

import { TextInput } from "@repo/ui/TextInput";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/Card";
import { Select } from "@repo/ui/Select";
import { createOnRampTransaction } from "../lib/actions/createOnrampTransaction";

import { useState } from "react";

const BANKS = [
  {
    name: "HDFC",
    redirectUrl: "https://www.hdfcbank.com/",
  },
  {
    name: "Axis",
    redirectUrl: "https://www.axisbank.com/",
  },
  {
    name: "SBI",
    redirectUrl: "https://www.onlinesbi.sbi/",
  },
];

const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(BANKS[0]?.redirectUrl);
  const [provider, setProvider] = useState(BANKS[0]?.name || "");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <Card title="Add Money">
        <div>
          <TextInput
            label="Amount"
            placeholder="Amount"
            onChange={(e: any) => setAmount(e.target.value)}
          />
          <div>Bank</div>
          {/* Know the working of select how it is working */}
          <Select
            onSelect={(value) => {
              // setProvider();
              setProvider(BANKS.find((e) => e.name === value)?.name || "");
              setRedirectUrl(
                BANKS.find((e) => e.name === value)?.redirectUrl || ""
              );
            }}
            options={BANKS.map((x) => ({
              key: x.name,
              value: x.name,
            }))}
          />
          <div className="flex justify-center pt-2">
            <Button
              onClick={async () => {
                await createOnRampTransaction(provider, amount);
                window.location.href = redirectUrl || "";
              }}
            >
              Add Money
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default AddMoney;

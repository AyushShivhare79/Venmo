"use client";

import { Card } from "@repo/ui/Card";
import { Select } from "@repo/ui/Select";
import { TextInput } from "@repo/ui/TextInput";
import { Button } from "@repo/ui/button";
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

export const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(BANKS[0]?.redirectUrl);
  return (
    <>
      <div>
        <Card title="Add Money">
          <TextInput label="Amount" placeholder="Amount" onChange={() => {}} />
          <div>Bank</div>
          <Select
            onSelect={(value) => {
              setRedirectUrl(
                BANKS.find((e) => e.name === value)?.redirectUrl || " "
              );
            }}
            options={BANKS.map((x) => ({
              key: x.name,
              value: x.name,
            }))}
          />
          <Button onClick={() => (window.location.href = redirectUrl || "")}>
            Add Money
          </Button>
        </Card>
      </div>
    </>
  );
};

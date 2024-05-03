"use client";

import { useBalance } from "@repo/store/useBalance";

export const Test = () => {
  const balance = useBalance();
  return <>Hii there my balane is {balance}</>;
};

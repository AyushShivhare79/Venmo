"use client";

import { Session } from "inspector";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
  );
};

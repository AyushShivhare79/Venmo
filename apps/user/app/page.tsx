"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Test } from "./Test";
import { Appbar } from "@repo/ui/Appbar";

export default function Page(): JSX.Element {
  const session = useSession();
  console.log(session.data?.user);
  return (
    <>
      <Appbar
        user={session.data?.user?.name}
        onSignout={signOut}
        onSignin={signIn}
      />
      <Test />
    </>
  );
}

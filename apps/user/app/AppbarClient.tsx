"use client";

import { Appbar } from "@repo/ui/Appbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function AppbarClient() {
  const router = useRouter();
  const session = useSession();

  return (
    <>
      <Appbar
        user={session.data?.user?.name}
        onSignout={() =>
          signOut({
            callbackUrl: "/api/auth/signin",
          })
        }
        onSignin={() =>
          signIn("credentials", {
            callbackUrl: "/dashboard",
          })
        }
      />
    </>
  );
}
export default AppbarClient;

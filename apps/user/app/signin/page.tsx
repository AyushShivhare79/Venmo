"use client";

import { Inputs } from "@repo/ui/Inputs";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthSwitch } from "../components/AuthSwitch";
import { toast } from "react-toastify";

export default function () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    toast.loading("Loading");
    return <div>Loading</div> 
  }

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className=" border border-black p-10 rounded-xl">
          <Inputs
            id="username"
            placeholder="ayush@gmail.com"
            label="Username"
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />

          <Inputs
            id="password"
            placeholder="12345678"
            label="Password"
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <button
            onClick={async () => {
              const res = await signIn("credentials", {
                username: username,
                password: password,
                redirect: true,
                callbackUrl: "/dashboard",
              });
              // if (res?.ok) {
              // toast.success("User login successful")
              //   } else {
              //     toast.error("User not found / please signup");
              //   }
            }}
            className="block m-auto border rounded-md mt-2 bg-blue-600 text-white h-8 w-52"
          >
            Login
          </button>

          <AuthSwitch
            text="Don't have an account yet? "
            href="/signup"
            main="Register"
          />
        </div>
      </div>
    </>
  );
}

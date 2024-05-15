"use client";

import { Inputs } from "@repo/ui/Inputs";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  return (
    <>
      <div>
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
              redirect: false,
            });
            router.push("/");
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}

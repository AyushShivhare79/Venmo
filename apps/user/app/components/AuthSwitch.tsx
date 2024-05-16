"use client";

import { useRouter } from "next/navigation";

export const AuthSwitch = ({
  text,
  href,
  main,
}: {
  text: string;
  href: string;
  main: string;
}) => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center items-center gap-1 pt-2">
        <div className="text-sm text-slate-500">{text}</div>
        <div
          onClick={() => {
            router.push(href);
          }}
          className="text-blue-600 text-sm  font-semibold hover:cursor-pointer"
        >
          {main}
        </div>
      </div>
    </>
  );
};

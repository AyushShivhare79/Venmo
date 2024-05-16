"use client";

import { usePathname, useRouter } from "next/navigation";

interface sidebarComp {
  title: string;
  href: string;
  icon: any;
}

export function SidebarItems({ title, href, icon }: sidebarComp) {
  const router = useRouter();
  const params = usePathname();
  const select = href === params;
  return (
    <>
      <div
        onClick={() => {
          router.push(href);
        }}
        className={`flex ${select ? "text-purple-500" : "text-gray-500"} font-bold pl-8 pt-3 cursor-pointer`}
      >
        <div className="flex gap-1">
          <div>{icon}</div>
          <div>{title}</div>
        </div>
      </div>
    </>
  );
}

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Home = () => {
  const { data: session, status }: any = useSession();
  
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }

  return (
    <>
      {JSON.stringify(session?.user?.id)}
      <div></div>
    </>
  );
};

export default Home;

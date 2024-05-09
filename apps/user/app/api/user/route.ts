import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";

export const GET = async () => {
  const session = await getServerSession(authOptions);

  console.log(session)
  if (session) {
    return NextResponse.json({
      user: session,
    });
  }
  return NextResponse.json(
    {
      message: "You are not logged in",
      msg: process.env.NEXTAUTH_SECRET,
    },
    {
      status: 403,
    }
  );
};

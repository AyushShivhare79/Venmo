import { PrismaClient } from "@repo/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const prisma = new PrismaClient();

const signupBody = z.object({
  username: z.string().email(),
  password: z.string().min(7),
  firstName: z.string().max(50),
  lastName: z.string().max(50),
  phoneNumber: z.string().min(10).max(10),
});

export async function POST(req: NextRequest, res: NextRequest) {
  try {
    const userInfo = await req.json();

    console.log(userInfo);

    const { success } = signupBody.safeParse(userInfo);

    console.log(success);

    if (!success) {
      console.log("Here");
      return NextResponse.json({ msg: "Invalid inputs" });
    }

    const userExist = await prisma.user.findFirst({
      where: {
        username: userInfo.username,
      },
    });
    console.log(userExist);
    if (userExist) {
      // return NextResponse.json({ msg: "User already exists please Login" });
      return NextResponse.json({ msg: "0" });
    }
    const response = await prisma.user.create({
      data: {
        username: userInfo.username,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        phoneNumber: userInfo.phoneNumber,
        password: userInfo.password,
      },
    });
    
    // return NextResponse.json({ msg: "User created successful", response });
    return NextResponse.json({ msg: "1", response });

  } catch {
    return NextResponse.json({ msg: "Fucked up" });
  }
}

import { PrismaClient } from "@repo/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const prisma = new PrismaClient();

const signupBody = z.object({
  username: z.string().email(),
  password: z.string().min(7),
  firstName: z.string().max(50),
  lastName: z.string().max(50),
  phoneNumber: z.coerce.number().int(),
});

export async function POST(req: NextRequest, res: NextRequest) {
  try {
    const userInfo = await req.json();
    const { success } = signupBody.safeParse(userInfo);

    if (!success) {
      return NextResponse.json({ msg: "Invalid inputs" });
    }

    const userExist = await prisma.user.findFirst({
      where: {
        username: userInfo.username,
        password: userInfo.password,
      },
    });
    if (userExist) {
      return NextResponse.json({ msg: "User already exists please Login" });
    }

    const response = await prisma.user.create({
      data: {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        username: userInfo.username,
        password: userInfo.password,
        phoneNumber: userInfo.phoneNumber,
      },
    });
    return NextResponse.json({ msg: "User created successful", response });
  } catch {
    return NextResponse.json({ msg: "Fucked up" });
  }
}

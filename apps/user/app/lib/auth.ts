import { PrismaClient } from "@repo/db";
import Credentials from "next-auth/providers/credentials";
import { signIn, signOut } from "next-auth/react";
import { pages } from "next/dist/build/templates/app-page";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        username: {
          label: "Username",
          type: "email",
          placeholder: "ayush@gmail.com",
        },
        password: {
          label: "Password",
          type: "pass",
          placeholder: "12345678",
        },
      },
      async authorize(credentials) {
        const username = credentials?.username || "";
        const password = credentials?.password || "";
        const userExist = await prisma.user.findFirst({
          where: {
            username,
            password,
          },
        });

        if (userExist) {
          return {
            id: userExist.id.toString(),
            name: userExist.firstName,
            email: userExist.username,
          };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ token, session }: any) {
      session.user.id = await token.sub;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/signin",
  },
};

import { PrismaClient } from "@repo/db";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export const authOptions = NextAuth({
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
        console.log(username, password);
        const userExist = await prisma.user.findFirst({
          where: {
            username,
            password,
          },
        });
        console.log(userExist);
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
    async session({ token, user, session }: any) {
      session.user.id = user.id;

      console.log("Here", session);
      return session;
    },
  },
});

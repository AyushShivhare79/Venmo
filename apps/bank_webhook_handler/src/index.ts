import express from "express";
import { PrismaClient } from "@repo/db";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount,
  };
  console.log(paymentInformation);
  try {
    const response = await prisma.$transaction([
      prisma.balance.update({
        where: {
          userId: Number(paymentInformation.userId),
        },
        data: {
          amount: { increment: Number(paymentInformation.amount) },
        },
      }),

      prisma.onRampTransaction.update({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);

    console.log("This is the response: ", response);

    res.json({
      msg: "Captured",
    });

    console.log("HERE");
  } catch (e) {
    console.error(e);
    res.status(411).json({
      msg: "Error while processing webhook",
    });
  }
});

app.listen(3003);

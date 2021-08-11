import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/client";

const prisma = new PrismaClient();


export default async (req, res) => {
  const day = req.body;

  const session = await getSession({ req });

  const updatedTaps = await prisma.tap.updateMany({
    where: {
      user: session.user.name,

      NOT: {
        lastRated: day.curDay,
      },
    },

    data: {
      rated: "false",
    },
  });

  await prisma.$disconnect();

  res.json(updatedTaps);
};


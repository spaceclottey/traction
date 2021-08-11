import { PrismaClient } from "@prisma/client";
import { signIn, signOut, useSession } from "next-auth/client";
import { getSession } from "next-auth/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const data = JSON.parse(req.body);

  const updatedTap = await prisma.tap.update({
    where: {
      id: data.id,
    },

    data: {
      rated: data.rated,
      trigger: data.trigger,
      action: data.action,
      lastRated: data.lastRated,
    },
  });

  await prisma.$disconnect();

  res.json(updatedTap);
};

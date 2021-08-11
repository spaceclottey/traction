import {PrismaClient} from '@prisma/client'
import { signIn, signOut, useSession } from 'next-auth/client'
import { getSession } from "next-auth/client"

const prisma = new PrismaClient();

export default async (req, res) => {
    const session = await getSession({ req })

    const data = JSON.parse(req.body);

    data.user = session.user.name
    
    const createdTap = await prisma.tap.create({
        data
    })

    await prisma.$disconnect()

    res.json(createdTap)
}

  
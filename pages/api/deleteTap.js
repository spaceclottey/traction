import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export default async function deleteTap(req, res){
    const data = JSON.parse(req.body);

    const deleteTap = await prisma.tap.delete({
        where: {
         id: data.id
        }
    })

    await prisma.$disconnect()
    

    res.json(deleteTap)
}

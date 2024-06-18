import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

async function main() {
    const allBoard = await prisma.board.findMany();
    console.log(allBoard);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })
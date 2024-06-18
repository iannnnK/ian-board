import Link from 'next/link'
import {PrismaClient} from "@prisma/client";
import {ReactNode} from "react";

const prisma = new PrismaClient();

export default async function Board() {
    let boards: ReactNode[] = [];
    for (let i = 0; i < 10; i++) {
        boards.push(
            <tr>
                <td>123</td>
                <td><Link href={`/board/${i}`}>응 없어.</Link></td>
                <td>12.09.12</td>
            </tr>
        )
    }

    return boards;
}

async function getBoard() {
    const allBoard = await prisma.board.findMany();
    console.log(allBoard);
    return allBoard;
}
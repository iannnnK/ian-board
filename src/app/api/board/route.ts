import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

async function GET(request: NextRequest) {
    try {
        const boards = await prisma.board.findMany();
        console.log('boards', boards);
        return NextResponse.json(boards);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

async function POST(request: NextRequest) {
    try {
        const data = {
            title: "제목",
            content: "내용",
            create_at: new Date(),
            writer: "이안",
        };
        console.log(data);
        const createBoard = await prisma.board.create({ data });
        return NextResponse.json(createBoard);
    } catch (error: any) {
        console.log("어떻게 된거임?");

        return NextResponse.json({ error: error }, { status: 500 });
    }
}

export { GET, POST };

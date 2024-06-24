import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

async function GET(request: NextRequest) {
    try {
        const boards = await prisma.board.findMany();
        return NextResponse.json(boards);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        console.log(data);
        const createBoard = await prisma.board.create({ data });
        return NextResponse.json(createBoard);
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export { GET, POST };

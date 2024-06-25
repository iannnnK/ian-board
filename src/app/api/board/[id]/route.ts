import { Board, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const boardDetail = await prisma.board.findUnique({
        where: {
            id: Number(params.id),
        },
    });
    return NextResponse.json(boardDetail);
}

async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const boards = await prisma.board.delete({
            where: {
                id: Number(params.id),
            },
        });
        return NextResponse.json(boards);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const updateBody = await request.json();
        const executeUpdate = await prisma.board.update({
            where: {
                id: Number(params.id),
            },
            data: updateBody,
        });
        return NextResponse.json(executeUpdate);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export { GET, DELETE, PATCH };

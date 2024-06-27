import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const result = await prisma.user.findUnique({
        where: {
            id: Number(params.id),
        },
    });
    return NextResponse.json(result);
}

export { GET };

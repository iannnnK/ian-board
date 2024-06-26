import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

async function GET(
    request: NextRequest,
    { params }: { params: { email: string } }
) {
    const target = await prisma.user.findUnique({
        where: {
            email: params.email,
        },
    });
    return NextResponse.json(target);
}

export { GET };

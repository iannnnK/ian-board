import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

async function GET({ params }: { params: { email: string } }) {
    const isExist = await prisma.user.findUnique({
        where: {
            email: params.email
        }
    });

    if(!isExist) {
        return;
    }
    return;
}

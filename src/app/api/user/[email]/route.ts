import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// 이메일 사용가능 여부 반환, 중복된 이메일이 있으면 false, 없으면 true
async function GET(
    request: NextRequest,
    { params }: { params: { email: string } }
) {
    const existEmail = await isExist(params.email);
    return NextResponse.json(existEmail);
}

async function isExist(email: string) {
    const availableEmail = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (!availableEmail) {
        return true;
    }
    return false;
}

export { GET };

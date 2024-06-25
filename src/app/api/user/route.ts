import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

async function POST(request: NextRequest) {
    try {
        const data = {
            emali: "asdfasdf",
        };
        const account = await prisma.user.create({ data });
        return NextResponse.json(account);
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export { POST };

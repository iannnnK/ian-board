"use client";

import { useSession } from "next-auth/react";
import { NextRequest } from "next/server";

interface BoardCreateDto {
    title: string;
    content: string;
    create_at: Date;
    authorId: number;
}

export default function CreateBoardBtn({ title, content }) {
    // const {data: session} = useSession();

    const handleClick = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        // const author = await getAuthorIdByEmail(session?.user?.email);

        const boardCreateDto = {
            title: title,
            content: content,
            create_at: new Date(),
            // authorId: author.id,
            authorId: 1,
        };

        console.log("boardCreateDto", boardCreateDto);

        await createBoard(boardCreateDto);
    };

    return (
        <div>
            <button
                type="submit"
                className="button purple large"
                onClick={handleClick}
            >
                등록
            </button>
        </div>
    );
}

async function createBoard(boardCreateDto: BoardCreateDto) {
    const request = new NextRequest("http://localhost:3000/api/board", {
        method: "POST",
        body: JSON.stringify(boardCreateDto),
    });

    try {
        const response = await fetch(request);
        if (!response.ok) {
            throw new Error("통신 실패");
        }

        const data = await response.json();
        console.log("Success : ", data);
    } catch (error) {
        console.log("Error : ", error);
    }
    window.location.href = "/board";
}

async function getAuthorIdByEmail(email: string) {
    const response = await fetch(`http://localhost:3000/api/user/login/${email}`);
    const data = await response.json();
    return data;
}
"use client";

import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

interface BoardUpdateDto {
    title: string;
    content: string;
}

export default function CreateBoardBtn({ getFormData }) {
    const handleClick = async (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // 기본 동작을 막습니다.
        console.log('수정 버튼 클릭');
        const {id, title, content} = getFormData();
        await updateBoard({title, content}, id);
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

async function updateBoard(BoardUpdateDto: BoardUpdateDto, id: string) {
    const request = new NextRequest("http://localhost:3000/api/board/" + id, {
        method: "PATCH",
        body: JSON.stringify(BoardUpdateDto),
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
    window.location.href = '/board'
}
import { NextRequest } from "next/server";

interface BoardUpdateDto {
    title: string;
    content: string;
}

export default function UpdateBoardBtn({ id, title, content }) {
    return (
        <div>
            <button
                type="submit"
                className="button purple large"
                onClick={() => updateBoard({ title, content }, id)}
            >
                등록
            </button>
        </div>
    );
}

async function updateBoard(boardUpdateDto: BoardUpdateDto, id: string) {
    const request = new NextRequest(`http://localhost:3000/api/board/${id}`, {
        method: "PATCH",
        body: JSON.stringify(boardUpdateDto),
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
    window.location.href = `/board/${id}`;
}

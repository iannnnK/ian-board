import { NextRequest } from "next/server";

export interface BoardDetailData {
    title: string;
    content: string;
}

export default async function BoardDetail({ params }: {params: {id: string}}) {
    const boardDetail: BoardDetailData = await getBoardDetail(params.id);
    
    return (
        <>
            <tr>
                <th scope="row">
                    <label>제목</label>
                </th>
                <td>{boardDetail.title}</td>
            </tr>

            <tr>
                <th scope="row">
                    <label>내용</label>
                </th>
                <td>{boardDetail.content}</td>
            </tr>
        </>
    );
}

export async function getBoardDetail(id: string) {
    const response = await fetch("http://localhost:3000/api/board/" + id);
    return response.json();
}

async function deleteBoard(id: string) {
    if (!confirm("삭제하시겠습니까?")) {
        return;
    }
    const request = new NextRequest("http://localhost:3000/api/board/" + id, {
        method: "DELETE",
    });

    const response = await fetch(request);
    if (!response.ok) {
        throw new Error("실패");
    }
    window.location.href = "/board";
}

export { deleteBoard };

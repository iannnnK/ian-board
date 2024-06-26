import { NextRequest } from "next/server";

interface BoardDetailData {
    id: number;
    title: string;
    content: string;
    create_at: string;
}

export default async function BoardDetail({ params }) {
    const boardDetail: BoardDetailData = await getBoardDetail(params);

    console.log("boardDetail", boardDetail);

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

async function getBoardDetail(id: string) {
    const response = await fetch("http://localhost:3000/api/board/" + id);
    const data = response.json();

    console.log("response", data);
    return data;
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

import Link from "next/link";

interface BoardDetailData {
    id: number;
    title: string;
    content: string;
    create_at: string;
}

export default async function BoardDetail( {params}) {
    const boardDetail: BoardDetailData = await getBoardDetail(params);

    console.log('boardDetail', boardDetail);

    return (
        <>
            <tr>
                <th scope="row">
                    <label>제목</label>
                </th>
                <td>
                    {boardDetail.title}
                </td>
            </tr>

            <tr>
                <th scope="row">
                    <label>내용</label>
                </th>
                <td>
                    {boardDetail.content}
                </td>
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

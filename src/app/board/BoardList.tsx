import Link from "next/link";

interface BoardListData {
    id: number;
    title: string;
    create_at: string;
    writer: string;
}

export default async function BoardList() {
    const boardList: BoardListData[] = await getBoard();

    return boardList.map((board) => (
        <tr key={board.id}>
            <td>{board.id}</td>
            <td>
                <Link href={`/board/${board.id}`}>{board.title}</Link>
            </td>
            <td>{board.create_at.substring(0, 10)}</td>
        </tr>
    ));
}

async function getBoard() {
    const response = await fetch('http://localhost:3000/api/board');
    const data = response.json();
    console.log('response', data);
    return data;
}
import Link from "next/link";

interface BoardData {
    id: number;
    title: string;
    writer: string;
}

export default async function BoardList() {
    const boardList = await getBoard();

    return boardList.map((board: BoardData) => (
        <tr key={board.id}>
            <td>{board.id}</td>
            <td>
                <Link href={`/board/${board.id}`}>{board.title}</Link>
            </td>
            <td>{board.writer}</td>
        </tr>
    ));
}

async function getBoard() {
    const response = await fetch('http://localhost:3000/api/board');
    return response.json();
}
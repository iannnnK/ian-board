import { revalidatePath } from "next/cache";
import Link from "next/link";

interface BoardListData {
    id: number;
    title: string;
    create_at: string;
}

export default async function BoardList(id: number) {
    async function getBoardList() {
        "use server";

        const boardList: BoardListData[] = await getBoard(Number(id));
        revalidatePath(`/board`);
        return boardList;
    }


    
    return (await getBoardList()).map((board) => (
        <tr key={board.id}>
            <td>{board.id}</td>
            <td>
                <Link href={`/board/${board.id}`}>{board.title}</Link>
            </td>
            <td>{board.create_at.substring(0, 10)}</td>
        </tr>
    ));
}

async function getBoard(id: number) {
    const response = await fetch("http://localhost:3000/api/board");
    const data = await response.json();
    return data;
}

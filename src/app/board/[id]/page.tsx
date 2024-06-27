import BoardDetailBtnWrap from "@/components/board/BoardDetailBtnWrap";
import { revalidatePath } from "next/cache";

export default async function BoardPage({
    params,
}: {
    params: { id: string };
}) {
    const boardDetail: BoardDetailData = await getBoardDetail(params.id);
    console.log("페이지 boardDetail", boardDetail);
    const email = await getUserEmailById(boardDetail.authorId.toString());

    return (
        <>
            <div id="contents" className="">
                <div className="table-wrap mt10">
                    <table className="board-form va-m">
                        <colgroup>
                            <col width="10%" />
                            <col />
                        </colgroup>
                        <tbody key={params.id}>
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
                                <td>
                                    <p style={{ whiteSpace: "pre-wrap" }}>
                                        {boardDetail.content}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <BoardDetailBtnWrap id={params.id} email={email} />
        </>
    );
}

async function getUserEmailById(id: string) {
    "use server";
    const response = await fetch(`http://localhost:3000/api/user/data/${id}`);
    const data = await response.json();

    revalidatePath(`/board/${id}`);
    return data.email;
}

interface BoardDetailData {
    title: string;
    content: string;
    authorId: number;
}

async function getBoardDetail(id: string) {
    "use server";
    const response = await fetch(`http://localhost:3000/api/board/${id}`);

    revalidatePath(`/board/${id}`);
    return response.json();
}

export { getBoardDetail };

import BoardDetailBtnWrap from "@/components/board/BoardDetailBtnWrap";
import BoardDetail, {
    BoardDetailData,
    getBoardDetail,
} from "../../../components/board/BoardDetail";

export default async function BoardPage({
    params,
}: {
    params: { id: string };
}) {
    const boardDetail: BoardDetailData = await getBoardDetail(params.id);
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
                                <td>{boardDetail.content}</td>
                            </tr>
                            {/* <BoardDetail params={params} /> */}
                        </tbody>
                    </table>
                </div>
            </div>
            <BoardDetailBtnWrap id={params.id} email={email} />
        </>
    );
}

async function getUserEmailById(id: string) {
    const response = await fetch(`http://localhost:3000/api/user/data/${id}`);
    const data = await response.json();
    console.log('user email', data.email);
    return data.email;
}
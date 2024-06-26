
import { BoardBtn } from "./BoardBtn";
import BoardDetail, { deleteBoard } from "./BoardDetail";


export default function BoardPage({ params }: { params: { id: string } }) {
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
                            <BoardDetail params={params.id} />
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="board-btn-wrap">
                <BoardBtn id={params.id} text='수정'/>
                <BoardBtn id={params.id} text='삭제'/>
            </div>
        </>
    );
}

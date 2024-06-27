import BoardDetailBtnWrap from '@/components/board/BoardDetailBtnWrap';
import BoardDetail from '../../../components/board/BoardDetail';

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
                            <BoardDetail params={params} />
                        </tbody>
                    </table>
                </div>
            </div>
            <BoardDetailBtnWrap id={params.id}/>
        </>
    );
}

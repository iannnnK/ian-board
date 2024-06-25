import Link from "next/link";
import BoardDetail from "./BoardDetail";

export default function BoardPage({params}:{params:{id: string}}) {
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
                            <BoardDetail  params={params.id}/>
                        </tbody>
                    </table>
                </div>
            </div>
            <Link href={`/board/update/${params.id}`}> 수정하기 </Link>
        </>
    );
}

"use client";

import Link from "next/link";
import BoardDetail, { deleteBoard } from "./BoardDetail";
import { useRouter } from "next/navigation";

export default function BoardPage({ params }: { params: { id: string } }) {
    const router = useRouter();

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
                <button
                    type="button"
                    className="button purple large"
                    onClick={() => router.push(`/board/update/${params.id}`)}
                >
                    수정
                </button>
                <button
                    type="submit"
                    className="button purple large"
                    onClick={() => deleteBoard(params.id)}
                >
                    삭제
                </button>
            </div>
        </>
    );
}

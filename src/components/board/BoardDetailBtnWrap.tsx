'use client'

import { useRouter } from "next/navigation";
import { deleteBoard } from "./BoardDetail";

export default function BoardDetailBtnWrap(params: {id: string}) {
    const router = useRouter();

    return (
        <>
            <div id="board-btn-wrap">
                <button
                    type="button"
                    className="button purple large"
                    onClick={() => router.push(`/board/update/${params.id}`)}
                >
                    수정
                </button>
                <button
                    type="button"
                    className="button purple large"
                    onClick={() => deleteBoard(`${params.id}`)}
                >
                    삭제
                </button>
            </div>
        </>
    );
}

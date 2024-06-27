"use client";

import { useRouter } from "next/navigation";
import { deleteBoard } from "./BoardDetail";
import { useSession } from "next-auth/react";

export default function BoardDetailBtnWrap({ id, email }) {
    const router = useRouter();
    const { data: session } = useSession();

    if (!checkAuthor({ session, email })) {
        return <></>;
    }

    return (
        <>
            <div id="board-btn-wrap">
                <button
                    type="button"
                    className="button purple large"
                    onClick={() => router.push(`/board/update/${id}`)}
                >
                    수정
                </button>
                <button
                    type="button"
                    className="button purple large"
                    onClick={() => deleteBoard(`${id}`)}
                >
                    삭제
                </button>
            </div>
        </>
    );
}

function checkAuthor({ session, email }) {
    if (!session?.user) {
        return false;
    }
    if (session?.user?.email != email) {
        return false;
    }
    return true;
}

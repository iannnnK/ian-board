"use client";

import { useRouter } from "next/navigation";
// import { deleteBoard } from "./BoardDetail";
import { useSession } from "next-auth/react";
import { NextRequest } from "next/server";

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
                    onClick={async () => await deleteBoard(`${id}`)}
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

async function deleteBoard(id: string) {
    if (!confirm("삭제하시겠습니까?")) {
        return;
    }
    const request = new NextRequest(`http://localhost:3000/api/board/${id}`, {
        method: "DELETE",
    });

    const response = await fetch(request);
    if (!response.ok) {
        throw new Error("실패");
    }
    window.location.href = "/board";
}

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BoardWriteRoutingBtn() {
    const router = useRouter();
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <button
                type="button"
                className="button purple large"
                onClick={() => router.push(`/board/create`)}
            >
                글쓰기
            </button>
        );
    } else {
        return (
            <button
                type="button"
                className="button purple large"
                onClick={() => {
                    if (confirm("로그인이 필요한 기능입니다. \n로그인 페이지로 이동하시겠습니까?")) {
                        router.push(`/api/auth/signin`);
                    }
                }}
            >
                글쓰기
            </button>
        );
    }
}

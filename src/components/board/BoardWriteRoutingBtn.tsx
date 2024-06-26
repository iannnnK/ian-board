'use client'

import { useRouter } from "next/navigation";

export default function BoardWriteRoutingBtn() {
    const router = useRouter();
    return (
        <button
            type="button"
            className="button purple large"
            onClick={() => router.push(`/board/create`)}
        >
            글쓰기
        </button>
    );
}

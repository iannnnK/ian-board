'use client'
import { useRouter } from "next/navigation";

export function BoardBtn({id, text}) {
    const router = useRouter();

    return (
        <button
            type="button"
            className="button purple large"
            onClick={() => router.push(`/board/update/${id}`)}
        >
            {text}
        </button>
    );
}

'use client'

import BoardList from "./BoardList";
import { useRouter } from "next/navigation";

export default function BoardPage() {
    const router = useRouter();

    return (
        <>
            <div id="search-wrap">
                <input
                    type="text"
                    id="search-box"
                    title="검색어를 입력해 주세요."
                    placeholder="제목을 입력하세요."
                    name="board-title"
                />
                <button type="button" id="search-btn">
                    검색
                </button>
            </div>
            <div id="table-wrap">
                <table>
                    <colgroup>
                        <col width="10%" />
                        <col />
                        <col width="20%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">번호</th>
                            <th scope="col">제목</th>
                            <th scope="col">등록일</th>
                        </tr>
                    </thead>

                    <tbody>
                        <BoardList />
                    </tbody>
                </table>
            </div>
            <button
                type="button"
                className="button purple large"
                onClick={() => router.push(`/board/create`)}
            >
                글쓰기
            </button>
        </>
    );
}

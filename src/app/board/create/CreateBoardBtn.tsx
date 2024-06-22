"use client";

import { NextRequest } from "next/server";

export default function CreateBoardBtn() {
    return (
        <div className="btn-group pt40">
            <button
                type="submit"
                className="button purple large"
                id="regist"
                onClick={createBoard}
            >
                등록
            </button>
        </div>
    );
}

async function createBoard() {
    const request = new NextRequest("http://localhost:3000/api/board", {
        method: "POST",
        body: '{"foo": "bar"}',
    });

    let createBoard = await fetch(request);

    console.log("createBoard", createBoard);
    alert("생성완료");
    return;
}

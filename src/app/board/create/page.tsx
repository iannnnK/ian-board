"use client";

import React, { useRef, useState } from "react";
import CreateBoardBtn from "../../../components/board/CreateBoardBtn";

export default function BoardForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <>
            <div id="contents" className="">
                <div className="table-wrap mt10">
                    <table className="board-form va-m">
                        <colgroup>
                            <col width="10%" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <label>제목</label>
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        id="board-title"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">
                                    <label>내용</label>
                                </th>
                                <td>
                                    <div className="textarea">
                                        <textarea
                                            id="board-content"
                                            value={content}
                                            onChange={e => setContent(e.target.value)}
                                        ></textarea>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <CreateBoardBtn title={title} content={content} />
            </div>
        </>
    );
}

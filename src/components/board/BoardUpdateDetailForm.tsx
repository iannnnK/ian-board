"use client";

import { useEffect, useState } from "react";
import UpdateBoardBtn from "./UpdateBoardBtn";

export default function BoardUpdateDetailForm({ id, initTitle, initContent }) {
    const [title, setTitle] = useState(initTitle);
    const [content, setContent] = useState(initContent);
    

    return (
        <>
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
            <UpdateBoardBtn id={id} title={title} content={content} />
        </>
    );
}

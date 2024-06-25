"use client";

import React, { useRef } from "react";
import UpdateBoardBtn from "./UpdateBoardBtn";

export default function BoardForm({ params }: { params: { id: string } }) {
    const titleRef = useRef();
    const contentRef = useRef();

    const getFormData = () => {
        const title = titleRef.current.value;
        const content = contentRef.current.value;
        const id = params.id;
        return { id, title, content };
    };

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
                                        ref={titleRef}
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
                                            ref={contentRef}
                                        ></textarea>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <UpdateBoardBtn getFormData={getFormData}/>
            </div>
        </>
    );
}

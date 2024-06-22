import CreateBoardBtn from "./CreateBoardBtn";

export default function BoardForm() {
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
                                    <label>제목</label>{" "}
                                    <em className="font-orange">*</em>
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        name="inqTitle"
                                        id="qnaCustInqTitle"
                                        className="input-text"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">
                                    <label>내용</label>{" "}
                                    <em className="font-orange">*</em>
                                </th>
                                <td>
                                    <div className="textarea">
                                        <textarea
                                            id="textarea"
                                            name="inqDetail"
                                            title="내용입력"
                                            className="input-textarea"
                                        ></textarea>
                                        {/* <div className="util">
                                            <p className="count">
                                                <span id="textareaCnt">0</span>{" "}
                                                / 2000
                                            </p>
                                        </div> */}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <CreateBoardBtn />
            </div>
        </>
    );
}

import CreateUserBtn from "./CreateUserBtn";

export default function UserCreatePage() {
    return (
        <>
            <div id="contents" className="">
                <div className="table-wrap mt10">
                    <table className="board-form va-m">
                        <colgroup>
                            <col width="40%" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <label>이메일</label>
                                </th>
                                <td>
                                    <input type="text" id="user-email" />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">
                                    <label>비밀번호</label>
                                </th>
                                <td>                
                                    <input type="text" id="user-password" />                                
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <CreateUserBtn />
            </div>       
        </>
    );
}

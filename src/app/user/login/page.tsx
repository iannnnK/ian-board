"use client";

import UserLoginBtn from "@/components/user/UserLoginBtn";
import { useState } from "react";

export default function UserCreatePage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                                    <input
                                        type="text"
                                        id="user-email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label>비밀번호</label>
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        id="user-password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <UserLoginBtn email={email} password={password}/>
            </div>
        </>
    );
}

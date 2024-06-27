"use client";

import { useRef, useState } from "react";
import UserSignupBtn, {
    emailDuplicateCheck,
} from "../../../components/user/UserSignupBtn";

export default function UserCreatePage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validateEmail, setValidateEmail] = useState(false);

    return (
        <>
            <div id="contents" className="">
                <div className="table-wrap mt10">
                    <table className="board-form va-m">
                        <colgroup>
                            <col width="30%" />
                            <col />
                            <col width="15%" />
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
                                            setValidateEmail(false);
                                        }}
                                    />
                                </td>
                                <td>
                                    <button
                                        type="submit"
                                        id="email-check"
                                        onClick={() => {
                                            emailDuplicateCheck(`${email}`);
                                            setValidateEmail(true);
                                        }}
                                    >
                                        중복체크
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label>비밀번호</label>
                                </th>
                                <td>
                                    <input
                                        type="password"
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
                <UserSignupBtn email={email} password={password} validateEmail={validateEmail}/>
            </div>
        </>
    );
}

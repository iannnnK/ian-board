"use client";

import UserLoginBtn from "@/components/user/UserLoginBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UserCreatePage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();
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
                <div id="login-btn-wrap">
                    <UserLoginBtn email={email} password={password} />
                    <button
                        type="submit"
                        className="button purple large"
                        id="sign-up-route"
                        onClick={() => router.push(`/user/create`)}
                    >
                        회원가입
                    </button>
                </div>
            </div>
        </>
    );
}

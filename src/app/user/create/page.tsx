'use client'

import { useState } from "react";
import CreateUserBtn from "./CreateUserBtn";

export default function UserCreatePage() {
    const [email, setEmail] =  useState("");

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
                                    <input type="text" id="user-email"/>
                                </td>
                                <td>
                                    <button type="submit" id="email-check">중복체크</button>
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
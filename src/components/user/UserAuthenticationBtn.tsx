"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import UserLoginBtn from "./UserLoginBtn";
import UserLogoutBtn from "./UserLogoutBtn";
import { getCookie } from "@/utils/cookie-manager";

export default function UserAuthenticationBtn() {
    // const { data: session } = useSession();
    const router = useRouter();

    const token = getCookie("refreshToken");
    // if (session && session.user) {
    if (token) {
        return <UserLogoutBtn />;
    } else {
        return (
            <>
                <button onClick={() => router.push("/user/create")}>
                    회원가입
                </button>
                <UserLoginBtn />
            </>
        );
    }
}

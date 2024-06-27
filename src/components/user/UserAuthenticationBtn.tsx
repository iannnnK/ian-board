"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import UserLoginBtn from './UserLoginBtn';
import UserLogoutBtn from './UserLogoutBtn';


export default function UserAuthenticationBtn() {
    const { data: session } = useSession();
    const router = useRouter();

    if (session && session.user) {
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

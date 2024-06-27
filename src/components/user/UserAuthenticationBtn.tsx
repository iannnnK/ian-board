'use client'
import { useSession } from "next-auth/react";
import UserLogoutBtn from "./UserLogoutBtn";
import UserLoginBtn from "./UserLoginBtn";

export default function UserAuthenticationBtn() {

    const {data: session} = useSession();

    if(session && session.user) {
        return <UserLogoutBtn />
    } else {
        return <UserLoginBtn />
    }
}
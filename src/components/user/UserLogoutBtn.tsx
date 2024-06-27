import { signOut } from "next-auth/react";

export default function UserLogoutBtn() {
    return (
        <>
            <button onClick={() => signOut()}>로그아웃</button>
        </>
    );
}

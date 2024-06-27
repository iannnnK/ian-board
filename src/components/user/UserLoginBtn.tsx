import { signIn, useSession } from "next-auth/react";

export default function UserLoginBtn() {
    return (
        <>
            <button onClick={() => signIn()}>로그인</button>
        </>
    );
}

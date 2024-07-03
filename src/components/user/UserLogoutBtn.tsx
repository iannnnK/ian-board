import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserLogoutBtn() {
    const router = useRouter();
    return (
        <>
            <button
                onClick={() => {
                    router.push("/");
                    console.log("로그아웃");
                }}
            >
                로그아웃
            </button>
            {/* <button onClick={() => signOut()}>로그아웃</button> */}
        </>
    );
}

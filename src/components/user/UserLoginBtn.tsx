import { useRouter } from 'next/navigation';

export default function UserLoginBtn() {
    const router = useRouter();
    return (
        <>
            <button onClick={() => router.push("/user/login")}>로그인</button>
        </>
    );
}

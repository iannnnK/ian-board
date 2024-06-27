export default function UserLoginBtn({ email, password }) {
    return (
        <>
            <button
                type="submit"
                className="button purple large"
                onClick={() => login(email, password)}
            >
                로그인
            </button>
        </>
    );
}

async function login(email: string, password: string) {
    console.log("login 시도");
    try {
        const response = await fetch(
            `http://localhost:3000/api/user/login/${email}`
        );

        console.log("response.json()", response);
        if (!response.ok) {
            throw new Error("통신 실패");
        }

        const target = await response.json();
        if (
            target === null ||
            target === undefined ||
            target.password !== password
        ) {
            alert("아이디 또는 비밀번호가 일치하지 않습니다.");
            return;
        }

        window.location.href = "/board";
    } catch (error) {
        console.log("Error : ", error);
    }
}
export { login };

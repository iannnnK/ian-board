export default function UserLoginBtn({ email, password }) {
    return (
        <>
            <div id="login-btn-wrap">
                <button
                    type="submit"
                    className="button purple large"
                    onClick={() => login(email, password)}
                >
                    로그인
                </button>
            </div>
        </>
    );
}

async function login(email: string, password: string) {
    console.log("login 시도");
    try {
        const response = await fetch(
            `http://localhost:3000/api/user/login/${email}`
        );

        if (!response.ok) {
            throw new Error("통신 실패");
        }

        const target = await response.json();
        if (target.password !== password) {
            alert("아이디 또는 비밀번호가 일치하지 않습니다.");
            return;
        }
        window.location.href = "/board";
    } catch (error) {
        console.log("Error : ", error);
    }
}
export { login };

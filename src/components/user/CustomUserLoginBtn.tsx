export default function CustomUserLoginBtn({ email, password }) {
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
    try {
        const response = await fetch(
            `http://localhost:3000/api/user/login/${email}`
        );

        if (!response.ok) {
            throw new Error("통신 실패");
        }

        const target = await response.json();
        if(!(target && target.password == password)) {
            console.log('아이디 또는 비밀번호가 일치하지 않습니다.');
            return null;
        }
        return target;
    } catch (error) {
        console.log("Error : ", error);
    }
}
export { login };

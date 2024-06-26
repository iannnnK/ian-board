import { NextRequest } from "next/server";

export default function UserSignupBtn({ email, password, validateEmail }) {
    return (
        <div id="create-btn-wrap">
            <button
                type="submit"
                className="button purple large"
                id="user-create-btn"
                onClick={() => signUp(email, password, validateEmail)}
            >
                가입하기
            </button>
        </div>
    );
}

interface UserSignupDto {
    email: string;
    password: string;
}

async function signUp(email: string, password: string, validateEmail: boolean) {
    if (!validateEmail) {
        alert("이메일 중복체크해주세요.");
        return;
    }

    const userSignupDto: UserSignupDto = { email, password };

    const request = new NextRequest(`http://localhost:3000/api/user`, {
        method: "POST",
        body: JSON.stringify(userSignupDto),
    });

    try {
        const response = await fetch(request);
        if (!response.ok) {
            throw new Error("통신 실패");
        }

        const responseData = await response.json();

        console.log("가입 완료 : ", responseData);
        alert("가입완료 되었습니다.");
        window.location.href = "/user/login";
    } catch (error) {
        console.log("Error : ", error);
    }
}

async function emailDuplicateCheck(email: string) {
    const response = await fetch(`http://localhost:3000/api/user/${email}`);
    const result = await response.json();
    if (result) {
        alert("사용가능한 이메일입니다.");
        return;
    }
    alert("이미 존재하는 이메일입니다.");
}

export { emailDuplicateCheck };

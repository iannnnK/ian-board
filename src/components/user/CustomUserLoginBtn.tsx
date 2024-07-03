import { setCookie } from "@/utils/cookie-manager";
import crypto from "crypto";
import { useRouter } from "next/navigation";

const key = process.env.NEXT_PUBLIC_AUTH_SECRET as string;

export default function CustomUserLoginBtn({
    email,
    password,
}: {
    email: string;
    password: string;
}) {
    return (
        <>
            <button
                type="submit"
                className="button purple large"
                onClick={() => {
                    login(email, password);
                }}
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
        if (!(target && target.password == password)) {
            console.log("아이디 또는 비밀번호가 일치하지 않습니다.");
            return null;
        }
        // ----- 인증 성공
        const token = sign(target, key);
        if (token) {
            console.log('token 쿠키에 저장', token);
            setCookie("refreshToken", token, {
                path: "/",
                secure: "/",
                // expires: new Date().getHours() + 1, 
            });
        }

        // console.log("token", token);
        // console.log("target", target);
        // return target;
        window.location.href = "/";
    } catch (error) {
        console.log("Error : ", error);
    }
}

function base64UrlFromBase64(str: string) {
    return str.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function sign(payload: any, secretKey: string) {
    const header = {
        alg: "HS256",
        typ: "JWT",
    };
    const encodedHeader = base64UrlFromBase64(
        Buffer.from(JSON.stringify(header)).toString("base64")
    );

    const encodedPayload = base64UrlFromBase64(
        Buffer.from(JSON.stringify(payload)).toString("base64")
    );

    const signature = base64UrlFromBase64(
        crypto
            .createHmac("sha256", secretKey)
            .update(encodedHeader + "." + encodedPayload)
            .digest("base64")
    );

    return `${encodedHeader}.${encodedPayload}.${signature}`;
}

export { login };

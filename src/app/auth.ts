import { login } from "@/components/user/CustomUserLoginBtn";
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {
                    label: "이메일",
                    type: "text",
                    placeholder: "이메일 입력",
                },
                password: {
                    label: "비밀번호",
                    type: "password",
                },
            },
            authorize: async (credentials) => {
                let user = null;

                // logic to salt and hash password
                const pwHash = saltAndHashPassword(credentials.password);

                // logic to verify if user exists
                user = await getUserFromDb(credentials.email, pwHash);

                if (!user) {
                    // No user found, so this is their first attempt to login
                    // meaning this is also the place you could do registration
                    // throw new Error("User not found.");
                    throw new CredentialsSignin(
                        "아이디 또는 비밀번호가 일치하지 않습니다~~"
                    );
                }

                // return user object with the their profile data
                return user;
            },
        }),
    ],
});

function saltAndHashPassword(password: unknown) {
    return password;
}

async function getUserFromDb(email: unknown, pwHash: any): Promise<any> {
    const target = await login(email, pwHash);
    return target;
}

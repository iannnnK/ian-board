export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="title-wrap">
                <a href="/user/login">로그인</a>
            </div>
            <main id="login-wrap">{children}</main>
        </>
    );
}

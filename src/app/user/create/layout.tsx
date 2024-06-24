export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="title-wrap">
                <a href="/user/create">회원가입</a>
            </div>
            <main id="sign-up">
                {children}
            </main>
        </>
    );
}

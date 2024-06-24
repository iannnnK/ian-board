export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div id="title-wrap">
                <a href="/">회원가입</a>
            </div>
            {children}
        </>
    );
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <div id="title-wrap">
                <a href="/">게시판</a>
            </div>
            {children}
        </>
    );
}

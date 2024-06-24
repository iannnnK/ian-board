export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <div className="title-wrap">
                <a href="/">게시판</a>
            </div>
            {children}
        </>
    );
}

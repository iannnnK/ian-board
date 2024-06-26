import './total.css';

import UserAuthenticationBtn from '@/components/user/UserAuthenticationBtn';
import { cn } from '@/lib/utils';
import { SessionProvider } from 'next-auth/react';
import { Inter as FontSans } from 'next/font/google';

import type { Metadata } from "next";
// import "./globals.css";
const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Ian's Next Board",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <SessionProvider>
                    <nav>
                        <UserAuthenticationBtn />
                    </nav>
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
}

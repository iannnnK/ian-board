import type {Metadata} from "next";
import "./globals.css";
import Link from "next/link";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "Ian's Next Board",
    description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html>
            <body>
            {children}
            </body>
        </html>
    )
}
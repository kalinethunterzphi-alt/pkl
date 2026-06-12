import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

export const metadata: Metadata = {
    title: "khodilz | PKL & Portfolio",
    description: "Website resmi PKL dan portofolio khodilz – SMKN 8 Malang",
    icons: "/favicon.ico",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
        <body className="font-sans">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        </body>
        </html>
    );
}

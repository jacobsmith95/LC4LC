import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lori Cook - Life Coach",
  description: "Get Er Done With Joy Equus Life Coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans`}>
        <div className="flex flex-col justify-center items-center content-center">
          <Navbar />
          <main className="font-sans">{children}</main>
        </div>
      </body>
    </html>
  );
}

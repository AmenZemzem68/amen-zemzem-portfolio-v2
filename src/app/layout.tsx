import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amen Zemzem | Freelance Web Developer",
  description: "Created with the ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${calistoga.variable} bg-[#050816] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "react-toastify/dist/ReactToastify.css";
import "react-vertical-timeline-component/style.min.css";
import "./globals.css";

const inter = localFont({
  src: "../assets/fonts/Inter-Variable.woff2",
  variable: "--font-sans",
  display: "swap",
});

const calistoga = localFont({
  src: "../assets/fonts/Calistoga-Regular.woff2",
  variable: "--font-serif",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Amen Zemzem | Freelance Web Developer",
  description: "Created with ❤️",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${calistoga.variable} bg-[#050816] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

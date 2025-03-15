import type { Metadata } from "next";
import { Geist, Geist_Mono, Abhaya_Libre } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Maktour Hajj",
  description: "Experience a transformative Hajj journey with Maktour - Your trusted partner for spiritual travel and pilgrimage services. We provide comprehensive Hajj packages, expert guidance, and seamless travel arrangements to make your sacred journey memorable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${abhayaLibre.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

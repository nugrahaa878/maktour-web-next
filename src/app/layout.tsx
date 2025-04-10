import type { Metadata } from "next";
import { Geist, Geist_Mono, Abhaya_Libre } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '../context/LanguageContext';

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
        className={`${geistSans.variable} ${geistMono.variable} ${abhayaLibre.variable} antialiased min-h-screen relative`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat opacity-20 z-0"
          style={{ backgroundImage: 'url(/assets/images/bg-main.jpg)' }}
        ></div>
        <div className="relative z-10 min-h-screen">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}

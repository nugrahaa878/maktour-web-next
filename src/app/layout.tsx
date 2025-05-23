import type { Metadata } from "next";
import { Geist, Geist_Mono, Abhaya_Libre } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '../context/LanguageContext';
import { FilterProvider } from '../context/FilterContext';
import Navbar from '@/components/navbar';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import ToastProvider from '@/context/ToastContext';
import ClientBackgroundImage from '@/components/ClientBackgroundImage';

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
  title: "Maktour Hajj & Umrah",
  description: "Your trusted partner for Hajj and Umrah services. We provide comprehensive packages for a meaningful spiritual journey to the holy lands.",
  openGraph: {
    title: "Maktour Hajj & Umrah",
    description: "Your trusted partner for Hajj and Umrah services. We provide comprehensive packages for a meaningful spiritual journey to the holy lands.",
    images: [
      {
        url: "/assets/images/kabah.png",
        width: 1200,
        height: 630,
        alt: "Maktour Hajj & Umrah Services",
      }
    ],
    siteName: "Maktour",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maktour Hajj & Umrah",
    description: "Your trusted partner for Hajj and Umrah services. We provide comprehensive packages for a meaningful spiritual journey to the holy lands.",
    images: ["/assets/images/kabah.png"],
  },
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
        <ClientBackgroundImage />
        <div className="relative z-10 min-h-screen">
          <LanguageProvider>
            <ToastProvider>
              <FilterProvider>
                <Navbar />
                {children}
                <WhatsAppFAB />
              </FilterProvider>
            </ToastProvider>
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}

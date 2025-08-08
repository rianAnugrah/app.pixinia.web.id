import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HCML",
  description: "Husky-CNOOC Madura Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col w-full min-h-screen bg-gray-900">
          <Navbar />
          <div className="w-full min-h-[calc(100dvh_-_8rem)] overflow-y-auto">
            <PageTransition>
              {children}
            </PageTransition>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}

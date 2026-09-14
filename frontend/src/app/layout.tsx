import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import AppSidebar from "@/components/layout/AppSidebar";
import ClientFooter from "@/components/layout/ClientFooter";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QMeal - Gợi ý món ăn Việt Nam",
  description: "Giải quyết bài toán hôm nay ăn gì với QMeal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} bg-[#faf9f6] min-h-screen flex flex-col`}>
        <AppSidebar />
        <Navbar />
        <main className="flex-1 pb-16 sm:pb-0">
          {children}
        </main>
        <ClientFooter />
        <MobileBottomNav />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import AppSidebar from "@/components/layout/AppSidebar";
import ClientFooter from "@/components/layout/ClientFooter";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#ea580c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "QMeal • Hôm Nay Ăn Gì?",
    template: "%s | QMeal",
  },
  description: "Trợ lý ẩm thực Việt Nam thông minh - Gợi ý món ăn chuẩn vị 3 miền, tủ lạnh thông minh và giỏ đi chợ tiện lợi.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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

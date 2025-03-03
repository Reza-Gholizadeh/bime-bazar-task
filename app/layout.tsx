import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "@/styles/globals.css";

const vazirMatn = Vazirmatn({
  weight: ["400", "500", "700"],
  variable: "--font-vazir-matn",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Bime Bazar",
  description: "create insurance order",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${vazirMatn.variable} antialiased`}>{children}</body>
    </html>
  );
}

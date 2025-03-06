import "@/styles/globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { Header } from "@/components";
import { INSURANCE } from "@/constant";
import ReactQueryProvider from "@/provider/ReactQueryProvider";
import { HomeIndicatorSpace } from "@/components/HomeIndicatorSpace/HomeIndicatorSpace";
import FormProviders from "@/provider/submitionFormProvider";

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
      <body className={`${vazirMatn.variable} antialiased`}>
        <ReactQueryProvider>
          <FormProviders>
            <Header title={INSURANCE.DETAIL} />
            {children}
            <HomeIndicatorSpace />
          </FormProviders>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

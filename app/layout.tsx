import "@/styles/globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { Header, IndicatorSpace } from "@/components";
import { INSURANCE } from "@/constant";
import ReactQueryProvider from "@/provider/ReactQueryProvider";
import FormProviders from "@/provider/submitionFormProvider";
import { Suspense } from "react";
import { ModalProvider } from "@/provider/modalsProvider";

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
    <Suspense fallback="loading...">
      <html lang="en" dir="rtl">
        <body className={`${vazirMatn.variable} antialiased`}>
          <ReactQueryProvider>
            <FormProviders>
              <ModalProvider>
                <Header title={INSURANCE.DETAIL} />
                {children}
                <IndicatorSpace />
              </ModalProvider>
            </FormProviders>
          </ReactQueryProvider>
        </body>
      </html>
    </Suspense>
  );
}

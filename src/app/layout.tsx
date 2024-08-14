import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./provider";
import { light } from "./theme/palette";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"], variable: "--lato" });
const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "SIXT",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable} ${lato.variable}`}>
      <Provider>
        <body className={pretendard.className}>{children}</body>
      </Provider>
    </html>
  );
}

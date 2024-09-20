import type { Metadata } from "next";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight:["300","400","500","600","800"] });
import "./globals.css";

export const metadata: Metadata = {
  title: "Cars Planet",
  description: "Muhammad Maaz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`  ${nunito.className}`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}

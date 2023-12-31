import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Super Mario Run",
  description: "Generated by Arthur Bicalho",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="../assets/block.png"/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

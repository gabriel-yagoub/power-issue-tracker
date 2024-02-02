import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Power Internal Issue Tracker",
  description: "Created by Gabriel Yagoub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme accentColor="jade">
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}

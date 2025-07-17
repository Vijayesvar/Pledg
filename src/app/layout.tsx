import type { Metadata } from "next";
import "./globals.css";
import { instrumentSans } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Pledg",
  description: "Pledg is a peer-to-peer lending platform that allows you to borrow and lend money using crypto as collateral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} antialiased`}
      >
        <Header />
        {children}
        <div className="px-24"> 
          <Footer />
        </div>
      </body>
    </html>
  );
}

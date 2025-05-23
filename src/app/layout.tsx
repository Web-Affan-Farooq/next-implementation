import type { Metadata } from "next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          {/*className="bg-custom_1 w-full h-[120vh]" */}
        {/* <Header/> */}
        {children}
        {/* <Footer/> */}
        </div>
      </body>
    </html>
  );
}

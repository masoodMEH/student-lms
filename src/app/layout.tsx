import type { Metadata } from "next";
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
    <html lang="fa" dir="rtl">
      <body className="flex flex-col min-h-screen font-bold uppercase">
        <header className="bg-gray-200 flex items-center justify-center h-20">
          هدر
        </header>
        <div className="flex-1 flex justify-center items-center">
          {children}
        </div>
        <footer className="bg-gray-200 flex items-center justify-center text-3xl h-20">
          فوتر
        </footer>
      </body>
    </html>
  );
}

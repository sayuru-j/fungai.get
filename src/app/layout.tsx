import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import ContactUs from "@/components/contact-us";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FungAI",
  description: "Know Your Shroom: Elevate Your Mushroom Cultivation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ContactUs />
        </ThemeProvider>
      </body>
    </html>
  );
}

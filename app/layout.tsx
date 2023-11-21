import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GeistSans, GeistMono } from "geist/font";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
// import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Footer from "@/components/Footer";
import { Viewport } from "next";
import ShoppingCart from "@/components/cart/ShoppingCart";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-full pt-4 flex-grow scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thumb-rounded scrollbar-track-rounded">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

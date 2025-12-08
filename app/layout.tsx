import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Marcellus,
} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});
const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "JCL Services - Exceptional Furniture's For Indoor & Outdoor",
  description:
    "Discover timeless elegance and innovative furniture solutions for your home. Explore our luxurious collection of indoor and outdoor furniture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${marcellus.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

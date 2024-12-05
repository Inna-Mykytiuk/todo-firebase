import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";

import meta from "../data/meta.json";
import "./globals.css";

const NEXT_PUBLIC_URL = "http://localhost:3000/";

const { title, description, manifest, openGraph, icons } = meta;

export const metadata: Metadata = {
  metadataBase: new URL(NEXT_PUBLIC_URL),
  title,
  description,
  icons,
  manifest,
  alternates: {
    canonical: NEXT_PUBLIC_URL,
  },
  openGraph: {
    ...openGraph,
    url: NEXT_PUBLIC_URL,
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${sora.variable} text-mainColor antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

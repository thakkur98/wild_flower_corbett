import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/components/ReduxProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Corbett Wild Flower — Resort & Spa",
  description: "Corbett Wild Flower Resort and Spa — luxury and comfort in nature.",
  metadataBase: new URL("https://wildflowercorbett.vercel.app"),
  keywords: [
    "Corbett resort",
    "Corbett hotel",
    "Corbett Wild Flower",
    "Ramnagar hotel",
    "destination resort",
    "spa retreat",
    "eco resort",
  ],
  authors: [{ name: "Corbett Wild Flower", url: "https://wildflowercorbett.com" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1f2937",
  openGraph: {
    title: "Corbett Wild Flower — Resort & Spa",
    description:
      "Corbett Wild Flower Resort and Spa — luxury and comfort in nature.",
    type: "website",
    url: "https://wildflowercorbett.com",
    siteName: "Corbett Wild Flower",
    images: [
      {
        url: "https://wildflowercorbett.com/home-view-1.png",
        width: 1200,
        height: 630,
        alt: "Corbett Wild Flower Resort & Spa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corbett Wild Flower — Resort & Spa",
    description:
      "Corbett Wild Flower Resort and Spa — luxury and comfort in nature.",
    images: ["https://wildflowercorbett.com/home-view-1.png"],
    creator: "@corbett_wild_flower_resort",
  },
  other: {
    "google-site-verification": "6EWEivVNtvRpEiMKdU5Emz-DLRxHSnWWRLvL-cxfcko"
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <ReduxProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}

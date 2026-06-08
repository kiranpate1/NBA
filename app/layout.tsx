import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const geistMono = localFont({
  src: [
    {
      path: "../public/fonts/Geist_Mono/GeistMono-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../public/fonts/Geist_Mono/GeistMono-Italic-VariableFont_wght.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

const bebasNeue = localFont({
  src: [
    {
      path: "../public/fonts/Bebas_Neue/BebasNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bykiranpa.tel/"),
  title: {
    default: "OKC vs SAS",
    template: "OKC vs SAS | %s",
  },
  description:
    "Oklahoma City Thunder vs. San Antonio Spurs prototype built by Kiran Patel",
  applicationName: "OKCvsSAS Prototype",
  keywords: ["OKC", "SAS", "NBA", "prototype"],
  authors: [{ name: "Kiran Patel" }],
  creator: "Kiran Patel",
  publisher: "Kiran Patel",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "OKCvsSAS Prototype",
    title: "OKCvsSAS Prototype",
    description:
      "Oklahoma City Thunder vs. San Antonio Spurs prototype built by Kiran Patel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OKCvsSAS Prototype site preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OKC vs SAS",
    description:
      "Oklahoma City Thunder vs. San Antonio Spurs prototype built by Kiran Patel",
    images: ["/og-image.jpg"],
    creator: "@pate1kiran",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

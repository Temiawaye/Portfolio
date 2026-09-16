import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import IntroGate from "../components/intro/IntroGate";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["Consolas", "Courier New", "monospace"],
});

export const metadata: Metadata = {
  title: "Awaye Temiloluwa Frontend Engineer",
  description:
    "Portfolio of Awaye Temiloluwa, a frontend engineer and UI developer specializing in building visually stunning and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/models/at-monogram-3d.glb"
          as="fetch"
          type="model/gltf-binary"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${jetBrainsMono.variable} antialiased`}>
        {/* <IntroGate> */}
          <Navbar />
          {children}
        {/* </IntroGate> */}
      </body>
    </html>
  );
}

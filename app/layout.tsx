import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloneFigma App",
  description: "Website clone from Figma design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

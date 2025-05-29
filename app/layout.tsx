import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloneFigma App",
  description: "Develop by Imtiaz",
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

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rehena Begum | Web Developer",
  description:
    "Portfolio of Rehena Begum — Frontend & Full Stack Web Developer.",
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
import type { Metadata } from "next";
import "./globals.css";

// Change these once your positioning is set (week 1).
export const metadata: Metadata = {
  title: "[Your product name]",
  description: "For [audience] who [need], [product] is a [category] that [benefit].",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

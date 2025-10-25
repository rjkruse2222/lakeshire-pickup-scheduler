import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakeshire Farm - Schedule Your Pickup",
  description: "Reserve your pickup time at Lakeshire Farm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

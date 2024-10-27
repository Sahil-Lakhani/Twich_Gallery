import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Twich Gallery",
  description: "Watch multiple Twitch streams in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}

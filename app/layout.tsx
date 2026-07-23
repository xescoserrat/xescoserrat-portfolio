import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xesco Serrat — Fashion Graphic Designer",
  description:
    "The creative practice of Xesco Serrat, Senior Fashion Graphic Designer in Barcelona.",
  metadataBase: new URL("https://xescoserrat-portfolio.pages.dev"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

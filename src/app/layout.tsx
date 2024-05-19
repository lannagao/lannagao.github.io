import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });
const garamond = EB_Garamond({ 
  subsets: ["latin"]
});

const myFont = localFont({
  src: './keshilumingti.ttf',
  //src: './cwTeXMing.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Lanna Gao",
  description: "Hi!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${garamond.className} ${myFont.className}`}>
      <body>{children}</body>
    </html>
  );
}

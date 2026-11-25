import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollReveal from "./component/scroll-reveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Carbon Count | Raghav Agarwal — Climate Action & Sustainability",
  description:
    "Official platform of Raghav Agarwal and Carbon Count: youth-led climate finance research, circular economy initiatives (Smiles Across Miles), and grassroots sustainability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}

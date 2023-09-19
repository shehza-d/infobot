import Header from "@/components/layout/header";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
// import { Navbar, Footer } from "@/components";
import { Toaster } from "react-hot-toast";

const font = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "InfoBot by Shehzad",
  description:
    "InfoBot Chatbot for FAQs | Don't repeat yourself with this site by Shehzad",
  icons: {
    icon: { url: "/fav/favicon.ico", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // className="grid min-h-screen grid-rows-[auto,1fr,auto]"
        // max-w-5xl px-4 md:px-8 mx-auto
        style={font.style}
      >
        <Header />
        {children}
        <Toaster position="top-center" />
        {/* <Footer /> */}
      </body>
    </html>
  );
}

import { AuthProvider } from "@/context/auth-context";
import { Geist, Geist_Mono } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Games Store",
  description: "Games Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "CarCompare - Find Your Perfect Drive",
  description: "Compare horsepower, torque, warranty, and more. Make informed vehicle decisions with comprehensive side-by-side comparisons.",
  keywords: "car comparison, vehicle specs, horsepower, torque, warranty, car buying guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

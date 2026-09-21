import type { Metadata } from "next";
import "./globals.css";
import Particles from "@/components/Particles";
import ModernNav from "@/components/ModernNav";
import ModernFooter from "@/components/ModernFooter";

export const metadata: Metadata = {
  title: "Daniel Tadesse - Solo Founder & Developer",
  description: "Solo founder and self-taught developer building a SaaS product from the ground up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900/30 to-gray-950">
        <Particles />
        <ModernNav />
        <main className="pt-20">{children}</main>
        <ModernFooter />
      </body>
    </html>
  );
}

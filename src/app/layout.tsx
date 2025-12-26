import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lil June | Official Music Store",
  description:
    "Official website for Lil June – music, digital downloads, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a1128] via-[#1e3a8a] to-[#0a1128]">
            <header className="border-b border-[#d4af37]/30 bg-[#0a1128]/95 backdrop-blur-md sticky top-0 z-50">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <a href="/" className="flex items-center gap-3 group">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1e40af] via-[#3b82f6] to-[#d4af37] text-lg font-black text-white shadow-lg shadow-[#d4af37]/30 group-hover:shadow-[#d4af37]/50 transition-all">
                    LJ
                  </span>
                  <div className="leading-tight">
                    <p className="text-lg font-bold tracking-wide text-white">
                      Lil June
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37]">
                      Official Store
                    </p>
                  </div>
                </a>
                <nav className="flex items-center gap-8 text-sm font-semibold">
                  <a href="/" className="text-white/90 hover:text-[#d4af37] transition-colors">
                    Home
                  </a>
                  <a href="/music" className="text-white/90 hover:text-[#d4af37] transition-colors">
                    Music
                  </a>
                </nav>
              </div>
            </header>

            <main className="flex-1">
              {children}
            </main>

            <footer className="border-t border-[#d4af37]/20 bg-[#0a1128]/95 mt-auto">
              <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-white/70 sm:flex-row">
                <p>© {new Date().getFullYear()} Lil June. All rights reserved.</p>
                <p className="uppercase tracking-[0.2em] text-[#d4af37]">LILJUNE.COM</p>
              </div>
            </footer>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

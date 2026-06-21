import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PeakGrades - Study Smarter",
  description: "Access IGCSE, IAS, and IAL past papers and resources.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        <nav className="bg-white shadow-sm p-4 flex justify-between items-center container mx-auto">
          <Link href="/" className="text-2xl font-bold text-blue-600">PeakGrades</Link>
          <div className="flex gap-6">
            <Link href="/papers" className="hover:text-blue-600">Papers</Link>
            <Link href="/login" className="hover:text-blue-600">Dashboard</Link>
          </div>
        </nav>
        <main className="flex-grow container mx-auto py-8 px-4">
          {children}
        </main>
        <footer className="bg-white border-t mt-10 py-6 text-center text-slate-500 text-sm">
          © 2024 PeakGrades. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

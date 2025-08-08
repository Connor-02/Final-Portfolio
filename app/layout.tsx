import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/site.config";
import { ClientCommandPalette } from "@/components/ClientCommandPalette";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ["software engineer", "cybersecurity", "web development", "python", "react", "next.js"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/api/og`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/api/og`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <header className="sticky top-0 z-50 glass-header">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <div className="font-semibold gradient-text text-lg">{siteConfig.name}</div>
            <nav className="flex gap-6 text-sm font-medium">
              <a href="/" className="hover:text-brand-pink transition-colors">Home</a>
              <a href="/projects" className="hover:text-brand-pink transition-colors">Projects</a>
              <a href="/resume" className="hover:text-brand-pink transition-colors">Resume</a>
              <a href="/contact" className="hover:text-brand-pink transition-colors">Contact</a>
            </nav>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm rounded-full border border-gray-200 text-gray-500">
              <span>⌘K</span>
              <span className="text-gray-700">Search</span>
            </div>
          </div>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="mt-16 border-t border-black/5 bg-muted/30">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-sm text-black/60">
                © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js and deployed on Vercel.
              </div>
              <div className="flex gap-4 text-sm">
                <a href={siteConfig.links.github} className="hover:text-brand-pink transition-colors">GitHub</a>
                <a href={siteConfig.links.linkedin} className="hover:text-brand-pink transition-colors">LinkedIn</a>
                <a href={siteConfig.links.email} className="hover:text-brand-pink transition-colors">Email</a>
              </div>
            </div>
          </div>
        </footer>
        <ClientCommandPalette />
      </body>
    </html>
  );
}

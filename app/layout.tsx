import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "AI kollegorna – Din nästa kollega, i en box",
    template: "%s | AI kollegorna",
  },
  description:
    "Mänskliga resultat, allt on premise, kollegan som aldrig är sjuk. AI-kollegor för svenska företag.",
  keywords: [
    "AI",
    "AI-kollegor",
    "automation",
    "svenska företag",
    "digital medarbetare",
    "on-premise AI",
  ],
  authors: [{ name: "AI kollegorna" }],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://aikollegorna.se",
    siteName: "AI kollegorna",
    title: "AI kollegorna – Din nästa kollega, i en box",
    description:
      "Mänskliga resultat, allt on premise, kollegan som aldrig är sjuk.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI kollegorna – Din nästa kollega, i en box",
    description:
      "Mänskliga resultat, allt on premise, kollegan som aldrig är sjuk.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="h-full antialiased">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WTCM8VQSWK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WTCM8VQSWK');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

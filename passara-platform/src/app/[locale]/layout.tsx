import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Passara Pradeshiya Sabha | Smart Digital Governance Platform",
    template: "%s | Passara Pradeshiya Sabha",
  },
  description:
    "Official digital governance platform of Passara Pradeshiya Sabha, Badulla District, Sri Lanka. Submit complaints, track projects, access public services and notices online.",
  keywords: ["Passara", "Pradeshiya Sabha", "Sri Lanka", "Local Government", "Badulla", "Smart Governance"],
  authors: [{ name: "Passara Pradeshiya Sabha IT Division" }],
  openGraph: {
    title: "Passara Pradeshiya Sabha | Smart Digital Governance",
    description: "Official digital governance portal for Passara Pradeshiya Sabha.",
    type: "website",
    locale: "en_LK",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{locale: string}> }>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

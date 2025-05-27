
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer'; // Import the Footer component
import { Toaster } from '@/components/ui/toaster';
import { FloatingWhatsAppButton } from '@/components/FloatingWhatsAppButton';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gustavo Futo - Drone Portfolio',
  description: 'Aerial photography and videography by Gustavo Futo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <div className="flex flex-col min-h-screen"> {/* Wrapper for sticky footer */}
          <Header />
          <main className="pt-16 flex-grow"> {/* Add padding-top and flex-grow */}
            {children}
          </main>
          <Footer /> {/* Add the Footer component here */}
          <Toaster />
        </div>
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}

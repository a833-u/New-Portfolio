import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/themeContext';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import PortfolioGradientWaves from '@/components/ui/PortfolioGradientWaves';
import PageTransition from '@/components/ui/PageTransition';
import CinematicPreloader from '@/components/ui/CinematicPreloader';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ansh Kansara | Data Analyst & Frontend Developer',
  description: 'Minimalist personal data profile and research portfolio for Ansh Kansara. Turning raw data into decisions and complex interfaces into simple experiences.',
  keywords: ['Ansh Kansara', 'Data Analyst', 'Frontend Developer', 'Data Visualization', 'D3.js', 'React.js', 'Power BI', 'SQL', 'Python', 'Vadodara'],
  authors: [{ name: 'Ansh Kansara' }],
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Ansh Kansara | Data Analyst & Frontend Developer',
    description: 'Minimalist personal data profile and research portfolio for Ansh Kansara.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ansh Kansara Portfolio',
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'Ansh Kansara Monogram' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ansh Kansara | Data Analyst & Frontend Developer',
    description: 'Turning raw data into decisions and complex interfaces into simple experiences.',
    images: ['/icon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body suppressHydrationWarning className="relative min-h-screen flex flex-col font-sans selection:bg-[#7C8F73]/20 dark:selection:bg-[#A8B99A]/30 transition-colors duration-300">
        <ThemeProvider>
          {/* Signature Cinematic Preloader */}
          <CinematicPreloader />

          {/* Global WebGL GradientWaves Background */}
          <PortfolioGradientWaves />
          
          {/* Interactive UI & Content Layer */}
          <div suppressHydrationWarning className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main suppressHydrationWarning className="flex-1 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-16">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

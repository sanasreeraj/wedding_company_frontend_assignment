import type { Metadata } from 'next';
import { Inter, DM_Serif_Display, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSerif = DM_Serif_Display({ subsets: ['latin'], style: 'italic', weight: '400', variable: '--font-dm-serif' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: 'Quiz App',
  description: 'Test Your Knowledge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable} ${manrope.variable} bg-white`}>
        {children}
      </body>
    </html>
  );
}
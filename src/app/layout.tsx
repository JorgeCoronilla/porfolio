import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

// const inter = Inter({ subsets: ['latin'] });
const inter = localFont({
  src: './ui/fonts/Bebas_Neue/BebasNeue-Regular.ttf',
});

export const metadata: Metadata = {
  title: 'Jorge Coronilla Naranjo porfolio',
  description: 'Front-end developer - typescript, React, JavaScript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

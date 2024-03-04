import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
// import localFont from 'next/font/local';

import './globals.css';

// const bebas_neue = Bebas_Neue({
//   subsets: ['latin'],
//   weight: '400',
//   variable: '--font-bebas-neue',
// });
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'fallback',
  variable: '--font-jakarta-sans',
});
// const plus_jakarta_sans = localFont({
//   src: './ui/fonts/Plus_Jakarta/PlusJakartaSans-VariableFont_wght.ttf',
// });

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
      <body className={plus_jakarta_sans.className}>{children}</body>
      {/* <body>{children}</body> */}
    </html>
  );
}

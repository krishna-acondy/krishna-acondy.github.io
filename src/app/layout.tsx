import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Krishna Acondy | Lead Full-stack Software Engineer',
  description:
    'Krishna is an experienced software engineer with over 14 years in the industry, and has led projects in various companies across domains such as agritech, consumer lifestyle, healthtech, banking and financial services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

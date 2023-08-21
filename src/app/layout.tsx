import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import Head from 'next/head';
import Header from '~/components/Header';

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://krishna-acondy.io'),
  title: 'Krishna Acondy | Lead Full-stack Software Engineer',
  description:
    'Krishna is an experienced software engineer with over 14 years in the industry, and has led projects in companies across agritech, consumer lifestyle, healthtech, banking and financial services domains.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='icon'
          href='/icon?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
        <meta property='og:image' content='<generated>' />
        <meta property='og:image:type' content='<generated>' />
        <meta property='og:image:width' content='<generated>' />
        <meta property='og:image:height' content='<generated>' />
        <meta name='twitter:image' content='<generated>' />
        <meta name='twitter:image:type' content='<generated>' />
        <meta name='twitter:image:width' content='<generated>' />
        <meta name='twitter:image:height' content='<generated>' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='msvalidate.01' content='A1BAC9864AC268197BC79539F9195777' />
      </Head>
      <body className={firaCode.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

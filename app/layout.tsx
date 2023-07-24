import Navbar from '@/components/navbar';
import './globals.css';
import type { Metadata } from 'next';
import { M_PLUS_1_Code } from 'next/font/google';
import Head from 'next/head';

const mPlus1C = M_PLUS_1_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Danyaal Ahmed',
  description: 'Portfolio website for ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Danyaal Ahmed - Homepage</title>
      </Head>

      <body className={`${mPlus1C.className}`}>
        <Navbar />
        {/* TODO: Find a better way than having to set padding to 300PX? */}
        <div className="container mx-auto px-[300px]  mt-24">{children}</div>
      </body>
    </html>
  );
}

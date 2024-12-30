"use client"
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import './globals.css';
import StyledRoot from './StyledRoot';
import { SessionProvider } from 'next-auth/react';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <AppRouterCacheProvider>
            <StyledRoot>
              <Navbar/>
              <div className='px-12'>
                {children}
              </div>
            </StyledRoot>
          </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

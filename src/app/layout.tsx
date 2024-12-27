"use client"
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import './globals.css';
import StyledRoot from './StyledRoot';
import { SessionProvider } from 'next-auth/react';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

// ✅ Metadata (ajústalo según tus necesidades)
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: any; // Ajusta el tipo de sesión según NextAuth si es necesario
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <AppRouterCacheProvider>
            <StyledRoot>
              <Navbar/>
              {children}
            </StyledRoot>
          </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

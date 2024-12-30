import type { Metadata } from 'next';
import RootLayout from './RootLayout';

export const metadata: Metadata = {
  title: 'NFTY DOOR',
  description: 'A division of Homebridge',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  );
}

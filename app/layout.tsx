import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Currency Exchange',
  description: 'Currency exchange rates',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main className="container py-10">{children}</main>
      </body>
    </html>
  );
}

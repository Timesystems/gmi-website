import React from 'react';
import type { Viewport, Metadata } from 'next';
import './slick-slider.css';
import './globals.css';
// import 'slick-carousel/slick/slick.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    template: `%s | Gender Mobile Initiative`,
    default: `Gender Mobile Initiative`,
  },
  icons: {
    icon: '/images/meta/icon-32x32.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

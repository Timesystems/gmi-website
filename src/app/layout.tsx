import React from 'react';
import type { Viewport, Metadata } from 'next';
import './slick-slider.css';
import './globals.css';
import Script from 'next/script';
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
      <body>
        {children}
        {/* <Script
          src='https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'
          integrity='sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=='
          strategy='beforeInteractive'
        />
        <Script src='/js/initialize.js' /> */}
      </body>
    </html>
  );
}

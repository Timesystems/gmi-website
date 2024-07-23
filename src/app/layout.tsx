import React from 'react';
import './slick-slider.css';
import './globals.css';
// import 'slick-carousel/slick/slick.css';

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

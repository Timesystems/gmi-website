import React from 'react';
import './globals.css';
// import 'slick-carousel/slick/slick.css';
import './slick-slider.css';

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

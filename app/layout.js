export const metadata = {
  title: 'App',
  description: 'Converted static site to Next.js',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

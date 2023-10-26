import { ReactNode } from 'react';
import './../styles/globals.scss';
import Head from './Head';

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <Head/>
    <body>{children}</body>
  </html>
);

export default RootLayout;
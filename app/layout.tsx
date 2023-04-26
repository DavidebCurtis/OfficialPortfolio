import './globals.css';
import { DM_Sans } from 'next/font/google';
import Nav from './Nav/page';
import About from './About/about';
import Projects from './creations/page';
import Contact from './contact/page';

const DMSans = DM_Sans({ weight: ['400'], subsets: ['latin'] });

export const metadata = {
  title: 'David Curtis Portfolio',
  description: 'David Curtis Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`flex flex-col ${DMSans.className} scroll-smooth`}>
        <Nav />
        {children}
        <About />
        <Projects />
        <Contact />
      </body>
    </html>
  );
}

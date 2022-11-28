import '../styles/globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

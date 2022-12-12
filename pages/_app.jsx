import '../styles/globals.css';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { appWithTranslation } from 'next-i18next'


const MyApp = ({ Component, pageProps }) => {
  // const [language, setLanguage] = useState("nor")
  return (
    <>
      <NavBar />
      <div className='wrapper ba-bg-dark'>
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  );
};

export default appWithTranslation(MyApp);

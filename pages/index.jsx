import Hero from '../components/Hero';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'hero',
        'schedule',
        'faq,',
        'termlist'
      ])),
    },
  }
}


const Home = ({locale}) => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;

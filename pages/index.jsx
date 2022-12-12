import Hero from '../components/Hero';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'hero',
      ])),
      // Will be passed to the page component as props
    },
  }
}

const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;

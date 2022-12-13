import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import GroupPic from "../images/bli-medlem/grouppic.jpg"

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'hero',
        'schedule',
        'faq',
        'member'
      ])),
    },
  }
}

const BliMedlem = () => {
  const { t } = useTranslation('member')

  return (
    <>
    <Head>
        <title>
          {t('Title')}
        </title>
        <meta
          name="description"
          content="Har du lyst å bli med i Bergen Armwresting Club? Meld deg inn her!"
        />
      </Head>
      <div className="mx-auto text-white lg:max-w-5xl">
        <h1 className="pt-8 mb-8 text-5xl text-center text-ba-color-gold">
          {t('Title')}
        </h1>
        <div
          className="grid w-5/6 grid-cols-1 mx-auto mb-12 text-white md:grid-cols-2 md:gap-20"
        >
          <div
            className="grid md:grid-rows-2"
          >
            <div
              className=" md:h-44 md:order-2"
            >
              <Image
                src={GroupPic}
                alt='Gruppebilde av Bergen Armwrestling'
                width={410}
                priority
              />
            </div>
            <div
              className="h-auto mt-0"
            >
              <h2
                className="font-bold"
              >
                {t('Become member')}
              </h2>
              <br />
              <p>
                {t('Test us')}
              </p>
              <br />
              <p>
                {t('Trail')}
              </p>
              <br />
              <p>
                {t('Sign up')}
                {' '}
                <Link
                  className="italic font-bold underline hover:text-ba-color-gold"
                  href="https://medlemskap.nif.no/553975"
                  title="Meld deg inn her"
                >
                  {t('Sign up link')}
                </Link>
              </p>
              <br />
              <ul>
                {t('Membership fee')}
                <li
                  className="ml-10 list-disc"
                >
                  {t('Over 21')}
                </li>
                <li
                  className="ml-10 list-disc"
                >
                  {t('Under 21')}
                </li>
              </ul>
              <br />
              <div
                className="text-center md:text-left"
              >
                <Link
                  href="https://medlemskap.nif.no/553975"
                  title="Meld deg inn her"
                >
                  <button
                    className="px-5 py-4 mx-auto mb-6 text-base font-medium text-white transition duration-500 ease-in-out transform bg-ba-color-gold lg:px-10 rounded-xl hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {t('Sign up btn')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>
                {t('Under 15')}
              </p>
              <br />
              <p>
                {t('Age limit')}
              </p>
              <br />
              <p>
                {t('Young members')}
              </p>
              <br />
              <p>
                {t('Contact')}
              </p>
              <br />
              <p>
                {t('Schedule')}
              </p>
              <br />
            </div>

            <h2
              className="font-bold"
            >
              {t('About BAW')}
            </h2>
            <br />
            <ul>
              <li
                className="ml-10 list-disc"
              >
                {t('Founded')}
              </li>
              <li
                className="ml-10 list-disc"
              >
                {t('Members')}
              </li>
              <li
                className="ml-10 list-disc"
              >
                {t('Location')}
              </li>
            </ul>
            <br />
            <h2
              className="font-bold"
            >
              {t('About')}
            </h2>
            <br />
            <p>
              {t('Athen')}
            </p>
            <p>
              {t('Changes')}
            </p>
            <br />
            <p>
              {t('Match')}
            </p>
            <p>
              {t('Technique')}
            </p>
          </div>
        </div>
      </ div>
    </>
  );
};

export default BliMedlem;
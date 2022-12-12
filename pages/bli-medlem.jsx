import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import GroupPic from "../images/bli-medlem/grouppic.jpg"

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'hero',
        'schedule',
        'faq'
      ])),
      // Will be passed to the page component as props
    },
  }
}

const BliMedlem = () => {
  return (
    <>
    <Head>
        <title>
          Bli medlem
        </title>
        <meta
          name="description"
          content="Har du lyst å bli med i Bergen Armwresting Club? Meld deg inn her!"
        />
      </Head>
      <div className="mx-auto text-white lg:max-w-5xl">
        <h1 className="pt-8 mb-8 text-5xl text-center text-ba-color-gold">
          Bli medlem
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
                Ønsker du medlemskap i Bergen Armwrestling?
              </h2>
              <br />
              <p>
                Kom å test oss ut!
              </p>
              <br />
              <p>
                Hos oss får du 3 prøvetreninger, før du trenger å ta stilling til om
                du ønsker å melde deg inn.
              </p>
              <br />
              <p>Innmelding gjør du enkelt
                {' '}
                <Link
                  className="italic font-bold underline hover:text-ba-color-gold"
                  href="https://medlemskap.nif.no/553975"
                  title="Meld deg inn her"
                >
                  her!
                </Link>
              </p>
              <br />
              <ul>
                Medlemskontigent pr 2022
                <li
                  className="ml-10 list-disc"
                >
                  Over 21 år: kr 500
                </li>
                <li
                  className="ml-10 list-disc"
                >
                  Under 21 år: kr 300
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
                    Meld deg inn her
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>
                Er du under 15 år, må innmelding gjøres av en forsatt.
              </p>
              <br />
              <p>
                Vi anbefaler en nedre aldersgrense på 13 år, da vi pr nå ikke kan tilby egne barnepartier.
              </p>
              <br />
              <p>
                Det oppfordres til at de yngste deltakerne har med seg en foresatt når en prøver ut sporten, eller vurderer å bli medlem.
              </p>
              <br />
              <p>
                Har du spørsmål knyttet til innmelding, bes man ta kontakt med klubbleder, André Engene eller via klubbmail:  bergenarmwrestling@outlook.com
              </p>
              <br />
              <p>
                Eventuelt møter du opp på en av våre treninger som er tirsdager mellom kl 19-21.
              </p>
              <br />
            </div>

            <h2
              className="font-bold"
            >
              Om Bergen Armwrestling
            </h2>
            <br />
            <ul>
              <li
                className="ml-10 list-disc"
              >
                Stiftet juni 2020
              </li>
              <li
                className="ml-10 list-disc"
              >
                30 medlemmer
              </li>
              <li
                className="ml-10 list-disc"
              >
                Trener på Gnisten, som vi låner gratis av Bergen Kommune
              </li>
            </ul>
            <br />
            <h2
              className="font-bold"
            >
              Om Håndbak
            </h2>
            <br />
            <p>
              Håndbak eller armbrytning strekker seg helt tilbake til de olympiske leker i Athen.
            </p>
            <p>
              I det siste har vi sett endringer i regler, stil og omfang.
            </p>
            <br />
            <p>
              Håndbak er en sosial og interessant sport, og en kamp varer som oftest mellom 1 - 2 sekunder.
            </p>
            <p>
              Mye avhenger av utøvers teknikk, muskelstyrke og hurtighet.
            </p>
          </div>
        </div>
      </ div>
    </>
  );
};

export default BliMedlem;
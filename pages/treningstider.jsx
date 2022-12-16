import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import inngang_narrow from "../public/inngang_narrow.png"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        // 'hero',
        "schedule",
        // 'faq',
      ])),
      // Will be passed to the page component as props
    },
  }
}

const Treningstider = () => {
  const { t } = useTranslation("schedule")

  return (
    <>
      <Head>
        <title>{t("Schedule")}</title>
        <meta
          name="description"
          content="Bergen Armwrestling Club trener tirsdager klokken 19.00 til 21.00. Og dem ligger på gnisten aktivitetsenter."
        />
      </Head>
      <h1 className="pt-8 mb-8 text-5xl text-center text-ba-color-gold ">
        {t("Schedule")}
      </h1>

      <div className="grid justify-center grid-cols-1 text-white md:max-w-5xl md:grid-cols-2 md:gap-12 md:mx-auto">
        {/* block 1 */}
        <div className="grid md:grid-rows-2 md:justify-end md:h-48">
          <div className="grid grid-cols-2 mb-4 text-2xl font-bold">
            <p className="grid justify-center h-0 md:mt-14 md:justify-start md:ml-10 xxs:mr-6 xs:mr-12">
              {t("Day")}
            </p>
            <p className="grid justify-start md:mt-14 xs:ml-7 md:ml-2 lg:justify-center lg:ml-4">
              19.00-21.00
            </p>
          </div>
          <div className="mx-10 lg:mt-4">
            <p>
              {t("Basic info 1")}{" "}
              <Link
                className="underline hover:text-ba-color-gold"
                href="https://www.facebook.com/profile.php?id=100063867946394"
                target="_blank"
                title={t("Link describtion")}
              >
                {t("Link")}
              </Link>{" "}
              {t("Basic info 2")}
            </p>
            <br />
            <p>{t("Location")}</p>
          </div>
        </div>

        {/* block 2  */}
        <div className="grid order-last grid-cols-1 my-4 md:my-4 md:order-none w-[90%] mx-auto ">
          {/* className="mx-auto my-6 md:h-64 md:ml-0 md:max-w-lg md:w-[90%] md:mr-2"  */}
          <iframe
            // xl:w-ba-width-large
            className="mx-auto my-11 w-[100%] h-[270px] md:ml-0 md:max-w-lg md:mr-2"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA-eLtEdtB-XioubLC_9yUcxUja3xYrukI&q=Gnisten_Aktivitetssenter,Bergen"
          />
        </div>

        {/* block 3 */}
        {/* className="mx-auto max-w-[800px] w-[90%] mb-4  justify-center items-center" */}
        <div className="col-span-2 mt-6 md:mt-0 md:mb-8">
          <div className="mx-auto max-w-[500px] w-[90%] items-center flex justify-center flex-col ">
            <Image
              src={inngang_narrow}
              className="rounded-sm max-h-[500px]"
              alt={t("Door")}
            />
            <p className="text-center text-white md:mb-2">{t("Door")}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Treningstider

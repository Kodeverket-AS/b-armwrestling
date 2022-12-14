import React, { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import { Carousel } from "flowbite-react"

// Used for Slideshow
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

// Used for photo gallery || requires --legacy-peer-deps
import Gallery from "react-photo-gallery-next"

import { AiFillCloseCircle } from "react-icons/ai"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"

import clubmembers from "../public/clubmembers.webp"
import victory from "../public/victory.webp"
import medals from "../public/medals.webp"
import training from "../public/training.webp"
import flextraining from "../public/flextraining.webp"
import trainingmedia from "../public/trainingmedia.webp"
import twopersonarmwrestling from "../public/twopersonarmwrestling.webp"
import youngandoldarmwrestling from "../public/youngandoldarmwrestling.webp"
import competitionwrestling from "../public/competitionwrestling.webp"
import clubphoto from "../public/clubphoto.webp"

// import { serverSideTranslations } from "next-i18next/serverSideTranslations"
// import { useTranslation } from "react-i18next"

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         "common",
//         "hero",
//         "schedule",
//         "termlist",
//         "gallery",
//       ])),
//     },
//   }
// }

// For Slideshow
const slides = [
  clubmembers,
  victory,
  medals,
  training,
  flextraining,
  trainingmedia,
  twopersonarmwrestling,
  youngandoldarmwrestling,
  competitionwrestling,
  clubphoto,
]

// For gallery
const photos = [
  {
    src: "/clubmembers.webp",
    width: 4,
    height: 1,
    priority: "priority",
    alt: "Glade medlemmer hos Bergen Armwrestling som poserer foran kamera",
  },
  {
    src: "/victory.webp",
    width: 3,
    height: 1,
    alt: "Jubel, deltakere som har vunnet medalje står på scenen med hendene i været",
  },
  {
    src: "/medals.webp",
    width: 2,
    height: 1,
    alt: "Seks deltakere som viser medaljer etter en turnering, og hvor den ene deltakeren har seiersbeltet rundt nakken",
  },
  {
    src: "/training.webp",
    width: 3,
    height: 1,
    alt: "Medlemmer som er i full gang med å trene i øvingslokalet",
  },
  {
    src: "/flextraining.webp",
    width: 3,
    height: 1,
    alt: "To personer som bryter håndbak, mens andre medlemer viser muskler",
  },
  {
    src: "/trainingmedia.webp",
    width: 3,
    height: 1,

    alt: "NRK er på besøk for å lage reportasje, hvor to deltakere er ikledd den ofisielle t-skjorten til Norges Bryteforbund",
  },
  {
    src: "/twopersonarmwrestling.webp",
    width: 2,
    height: 2,
    alt: "To medlemmer som er i gang med å bryte håndbak under en trening",
  },
  {
    src: "/youngandoldarmwrestling.webp",
    width: 2,
    height: 2,
    alt: "En av de yngre deltakerene bryter håndbak med en eldre deltaker, mens to personer står å ser på",
  },
  {
    src: "/competitionwrestling.webp",
    width: 1,
    height: 1,
    alt: "To kvinnelige deltakere som gjør seg klar til å bryte håndbak under en turnering, mens dommeren følger nøye med",
  },
  {
    src: "/clubphoto.webp",
    width: 1,
    height: 1,
    alt: "Medlemmer fra Bergen Armwrestling som poserer forran kamera inne på øvingslokalet",
  },
]

const Galleri = () => {
  const [index, setIndex] = useState(-1)
  // const { t } = useTranslation("gallery")

  return (
    <>
      <Head>
        <title>Galleri</title>
        <meta
          name="description"
          content="Bildegalleriet til Bergen Armwrestling Club er en samling av håndbakbilder"
        />
      </Head>
      <h1 className="pt-8 text-5xl text-center md:mb-12 text-ba-color-gold">
        {/* {t("Gallery")} */}
      </h1>
      <div className="items-center justify-center mx-auto my-4 mb-12 lg:max-w-5xl">
        <div className="grid grid-cols-2 grid-rows-1 gap-2 mx-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto ">
          <Image
            src={clubmembers}
            className="col-span-2 md:col-span-3 lg:col-span-2  md:h-[425px] lg:h-[321px] "
            alt="Glade medlemmer hos Bergen Armwrestling som poserer foran kamera"
          ></Image>

          <Image
            src={victory}
            className="col-span-2 md:col-span-2 lg:col-span-2 md:h-[334px] lg:h-[321px] "
            alt="Jubel, deltakere som har vunnet medalje står på scenen med hendene i været"
          ></Image>
          <Image
            src={medals}
            className="h-full col-span-2  md:col-span-1 md:h-[334px] object-fit lg:col-span-2 lg:object-cover "
            alt="Seks deltakere som viser medaljer etter en turnering, og hvor den ene deltakeren har seiersbeltet rundt nakken"
          ></Image>

          <Image
            src={training}
            className="h-full col-span-2 md:col-span-3 lg:col-span-2 lg:object-cover lg:h-[360px]"
            alt="Medlemmer som er i full gang med å trene i øvingslokalet"
          ></Image>

          <Image
            src={flextraining}
            className="h-full col-span-2 md:col-span-3 lg:col-span-2 lg:h-[360px] "
            alt="To personer som bryter håndbak, mens andre medlemer viser muskler"
          ></Image>

          <Image
            src={trainingmedia}
            className="h-full col-span-2 lg:col-span-2 "
            alt="NRK er på besøk for å lage reportasje, hvor to deltakere er ikledd den ofisielle t-skjorten til Norges Bryteforbund"
          ></Image>

          <Image
            src={twopersonarmwrestling}
            className="h-full col-span-1 "
            alt="To medlemmer som er i gang med å bryte håndbak under en trening"
          ></Image>
          <Image
            src={youngandoldarmwrestling}
            className="h-full col-span-1"
            alt="En av de yngre deltakerene bryter håndbak med en eldre deltaker, mens to personer står å ser på"
          ></Image>
          <Image
            src={competitionwrestling}
            className="h-full col-span-1"
            alt="To kvinnelige deltakere som gjør seg klar til å bryte håndbak under en turnering, mens dommeren følger nøye med"
          ></Image>
          <Image
            src={clubphoto}
            className="h-full col-span-1"
            alt="Medlemmer fra Bergen Armwrestling som poserer forran kamera inne på øvingslokalet"
          ></Image>

          {/* <Image src={victory} className=""></Image>
          <Image src={medals} className=""></Image>
          <Image src={training} className=""></Image>
          <Image src={flextraining} className=""></Image>
          <Image src={trainingmedia} className=""></Image>
          <Image src={twopersonarmwrestling} className=""></Image>
          <Image src={youngandoldarmwrestling} className=""></Image>
          <Image src={competitionwrestling} className=""></Image>
          <Image src={clubphoto} className=""></Image> */}
        </div>
        {/* <Gallery
          photos={photos}
          targetRowHeight={200}
          placeholder="blur"
          margin={6}
          onClick={(e, photo) => {
            setIndex(photo.index)
          }}
        /> */}
      </div>
    </>
  )
}

export default Galleri

{
  /* Carousel  */
}
{
  /* <div className="mb-4 sm:h-64  w-full md:h-[400px]  hidden md:block px-2 mx-auto">
          <Carousel slideInterval={5000} className="rounded-none">
            <Image
              src={clubmembers}
              alt="Glade medlemmer hos Bergen Armwrestling som poserer foran kamera"
              width={930}
              height={400}
              priority
              className="rounded-none"
            />
            <Image
              src={victory}
              alt="Jubel, deltakere som har vunnet medalje står på scenen med hendene i været"
              width={930}
              height={400}
              className="rounded-none"
            />
            <Image
              src={medals}
              alt="Seks deltakere som viser medaljer etter en turnering, og hvor den ene deltakeren har seiersbeltet rundt nakken"
              width={930}
              height={400}
              className="rounded-none"
            />
          </Carousel>
        </div> */
}

{
  /* Modal Solution */
}
{
  /* <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        styles={{
          button: { color: "#ca9d3d", fontSize: "40px" },
        }}
        slides={slides}
        render={{
          iconPrev: () => <BsArrowLeftCircle />,
          iconNext: () => <BsArrowRightCircle />,
          iconClose: () => <AiFillCloseCircle />,
          slide: (image, offset, rect) => {
            const width = Math.round(
              Math.min(rect.width, (rect.height / image.height) * image.width)
            )
            const height = Math.round(
              Math.min(rect.height, (rect.width / image.width) * image.height)
            )
            return (
              <div style={{ position: "relative", width, height }}>
                <Image
                  fill
                  src={image}
                  loading="eager"
                  placeholder="blur"
                  alt={"alt" in image ? image.alt : ""}
                  sizes={
                    typeof window !== "undefined"
                      ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                      : `${width}px`
                  }
                />
              </div>
            )
          },
        }}
      /> */
}

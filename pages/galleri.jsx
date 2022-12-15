import React, { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import { Carousel } from "flowbite-react"

// Used for Slideshow
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

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

import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "react-i18next"

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "hero",
        "schedule",
        "termlist",
        "gallery",
      ])),
    },
  }
}

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

const Galleri = () => {
  const [index, setIndex] = useState(-1)
  const { t } = useTranslation("gallery")

  const handleClick = (e) => {
    let idx = Number(e.target.getAttribute("index"))
    setIndex(idx)
  }

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
        {t("Gallery")}
      </h1>
      {/* Carousel and Gallery  */}
      <div className="items-center justify-center max-w-5xl mx-auto my-4 mb-12">
        {/* Carousel  */}
        <div className="mb-4 sm:h-64  w-full md:h-[400px]  hidden md:block px-2 mx-auto">
          <Carousel slideInterval={5000} className="rounded-none">
            <Image
              src={clubmembers}
              alt="Glade medlemmer hos Bergen Armwrestling som poserer foran kamera"
              width={930}
              height={400}
              priority
              className="object-cover"
            />
            <Image
              src={victory}
              alt="Jubel, deltakere som har vunnet medalje står på scenen med hendene i været"
              width={930}
              height={400}
            />
            <Image
              src={medals}
              alt="Seks deltakere som viser medaljer etter en turnering, og hvor den ene deltakeren har seiersbeltet rundt nakken"
              width={930}
              height={400}
            />
          </Carousel>
        </div>

        {/* Gallery  */}
        <div className="grid grid-cols-2 grid-rows-1 gap-1.5 mx-2 md:grid-cols-7 auto-rows-auto ">
          <Image
            src={clubmembers}
            className="rounded-sm col-span-2 md:col-span-7 lg:col-span-4  md:h-[425px] lg:h-[321px] "
            alt="Glade medlemmer hos Bergen Armwrestling som poserer foran kamera"
            index={0}
            onClick={handleClick}
          />
          <Image
            src={victory}
            className="rounded-sm col-span-2 md:col-span-4 lg:col-span-3 md:h-[334px] lg:h-[321px] "
            alt="Jubel, deltakere som har vunnet medalje står på scenen med hendene i været"
            index={1}
            onClick={handleClick}
          />
          <Image
            src={medals}
            className="rounded-sm h-full col-span-2  md:col-span-3 md:h-[334px] object-fit lg:col-span-3 lg:object-cover lg:h-[285px] "
            alt="Seks deltakere som viser medaljer etter en turnering, og hvor den ene deltakeren har seiersbeltet rundt nakken"
            onClick={handleClick}
            index={2}
          />
          <Image
            src={training}
            className="rounded-sm h-full col-span-2 md:col-span-7 md:h-[360px] lg:col-span-4 lg:object-cover lg:h-[285px]"
            alt="Medlemmer som er i full gang med å trene i øvingslokalet"
            onClick={handleClick}
            index={3}
          />
          <Image
            src={flextraining}
            className="rounded-sm h-full col-span-2 md:col-span-7 md:h-[360px] lg:col-span-4 lg:h-[280px] "
            alt="To personer som bryter håndbak, mens andre medlemer viser muskler"
            onClick={handleClick}
            index={4}
          />
          <Image
            src={trainingmedia}
            className="h-full col-span-2 rounded-sm md:col-span-5 lg:col-span-3 "
            alt="NRK er på besøk for å lage reportasje, hvor to deltakere er ikledd den ofisielle t-skjorten til Norges Bryteforbund"
            onClick={handleClick}
            index={5}
          />
          {/* ONly visible on tablet  */}
          <Image
            src={twopersonarmwrestling}
            className="hidden h-full col-span-1 rounded-sm md:block md:col-span-2 lg:hidden "
            alt="To medlemmer som er i gang med å bryte håndbak under en trening"
            onClick={handleClick}
            index={6}
          />{" "}
        </div>

        {/* 3 last images on md, last 4 on lg */}
        <div className="grid grid-cols-2 gap-2 m-2 md:grid md:grid-cols-3 lg:grid-cols-4">
          <Image
            src={twopersonarmwrestling}
            className="h-full col-span-1 rounded-sm md:hidden lg:block lg:col-span-1"
            alt="To medlemmer som er i gang med å bryte håndbak under en trening"
            onClick={handleClick}
            index={6}
          />
          <Image
            src={youngandoldarmwrestling}
            className="col-span-1 lg:col-span-1"
            alt="En av de yngre deltakerene bryter håndbak med en eldre deltaker, mens to personer står å ser på"
            onClick={handleClick}
            index={7}
          />
          <Image
            src={competitionwrestling}
            className="col-span-1 lg:col-span-1"
            alt="To kvinnelige deltakere som gjør seg klar til å bryte håndbak under en turnering, mens dommeren følger nøye med"
            onClick={handleClick}
            index={8}
          />
          <Image
            src={clubphoto}
            className="h-full col-span-1 lg:col-span-1"
            alt="Medlemmer fra Bergen Armwrestling som poserer forran kamera inne på øvingslokalet"
            onClick={handleClick}
            index={9}
          />
        </div>
      </div>

      {/* Slideshow  */}
      <Lightbox
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
      />
    </>
  )
}

export default Galleri

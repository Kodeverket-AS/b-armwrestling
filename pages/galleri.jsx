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

import image1 from "../public/image1.webp"
import image2 from "../public/group_01.webp"
import image3 from "../public/group_02.webp"
import image4 from "../public/group_03.webp"
import image5 from "../public/group_04.webp"
import image6 from "../public/group_05.webp"
import image7 from "../public/match_01.webp"
import image8 from "../public/match_02.webp"
import image9 from "../public/match_03.webp"
import image10 from "../public/FB_image.webp"

// For Slideshow
const slides = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
]

// For gallery
const photos = [
  {
    src: "/image1.webp",
    width: 4,
    height: 1,
    priority: "priority",
    alt: "Old group photo",
  },
  {
    src: "/group_01.webp",
    width: 3,
    height: 1,
    alt: "...",
  },
  {
    src: "/group_02.webp",
    width: 2,
    height: 1,
    alt: "...",
  },
  {
    src: "/group_03.webp",
    width: 3,
    height: 1,
    alt: "...",
  },
  {
    src: "/group_04.webp",
    width: 3,
    height: 1,
    alt: "...",
  },
  {
    src: "/group_05.webp",
    width: 3,
    height: 1,

    alt: "...",
  },
  {
    src: "/match_01.webp",
    width: 2,
    height: 2,
    alt: "...",
  },
  {
    src: "/match_02.webp",
    width: 2,
    height: 2,
    alt: "...",
  },
  {
    src: "match_03.webp",
    width: 1,
    height: 1,
    alt: "...",
  },
  {
    src: "/FB_image.webp",
    width: 1,
    height: 1,
    alt: "...",
  },
]

const Galleri = () => {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <Head>
        <title>Galleri</title>
        <meta
          name="description"
          content="Bildegalleriet til Bergen Armwrestling Club er en samling av håndbakbilder"
        ></meta>
      </Head>
      <h1 className="pt-8 text-5xl text-center md:mb-12 text-ba-color-gold">
        Galleri
      </h1>
      <div className="items-center justify-center mx-auto my-4 lg:max-w-5xl">
        {/* Carousel  */}
        <div className="mb-4 sm:h-64  w-full md:h-[400px]  hidden md:block px-2 mx-auto">
          <Carousel slideInterval={5000} className="rounded-none">
            <Image
              src={image1}
              alt="Gruppebilde etter seier"
              width={930}
              height={400}
              priority
              className="rounded-none"
            />
            <Image
              src={image2}
              alt="Gruppebilde med medaljer rundt halsen"
              width={930}
              height={400}
              className="rounded-none"
            />
            <Image
              src={image3}
              alt="Bilde tatt fra en håndbakkamp"
              width={930}
              height={400}
              className="rounded-none"
            />
          </Carousel>
        </div>
        <Gallery
          photos={photos}
          targetRowHeight={200}
          placeholder="blur"
          margin={6}
          onClick={(e, photo) => {
            setIndex(photo.index)
          }}
        />
      </div>
      {/* Modal Solution */}
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

import React from "react"
import Head from "next/head"
import Image from "next/image"
import { Carousel } from "flowbite-react"
import Overlay from "../components/Overlay"
import { useState } from "react"

import image_01 from "../public/group_01.webp"
import image_02 from "../public/group_02.webp"
import image_03 from "../public/group_03.webp"

const Gallery = () => {
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
    </>
  )
}

export default Gallery

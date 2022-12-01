import React from "react"
import Image from "next/image"
import data from "./galleri/images.json"
import { Carousel } from "flowbite-react"

import image_01 from "../public/wrestling_1.jpg"
import image_02 from "../public/wrestling_2.jpg"
import image_03 from "../public/wrestling_3.jpg"
import image_04 from "../public/wrestling_4.jpg"

const Gallery = () => {
  return (
    <>
      <h1 className="pt-8 mb-8 text-5xl text-center text-ba-color-gold">
        Galleri
      </h1>
      <div className="mx-auto lg:max-w-5xl">
        <SlideShow />
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 pb-6 mx-auto md:flex-row">
          {data.data.map((item, index) => (
            <Image
              className="rounded-md w-[90%] max-w-[425px]  md:w-[300px] md:h-[200px] h-[auto] object-cover"
              key={index}
              src={`/${item.link}`}
              width={400}
              height={300}
              alt={item.text}
              // onClick={() => handleClick(item, index)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery

// Use this to highlight featured images
const SlideShow = () => {
  return (
    <div className="h-[400px] mb-4 sm:h-64 w-[90%]  mx-auto  md:w-[615px] md:h-[400px] lg:w-[930px]">
      <Carousel slideInterval={5000} className="rounded-md">
        <Image src={image_01} alt="..." width={400} height={400} priority />
        <Image src={image_02} alt="..." width={400} priority />
        <Image src={image_03} alt="..." width={400} priority />
        <Image src={image_04} alt="..." width={400} priority />
      </Carousel>
    </div>
  )
}

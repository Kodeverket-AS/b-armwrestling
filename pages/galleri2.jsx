import React from "react"
import Image from "next/image"
import { Carousel } from "flowbite-react"
import Overlay from "../components/Overlay"
import { useState } from "react"

// Import all images manually instead of accessing an extra file and running operations on them
// Carousel
import image_01 from "../public/group_01.webp"
import image_02 from "../public/group_02.webp"
import image_03 from "../public/group_03.webp"

import image_04 from "../public/group_04.webp"
import image_05 from "../public/group_05.webp"
import image_06 from "../public/match_01.webp"
import image_07 from "../public/match_02.webp"
import image_08 from "../public/match_03.webp"
import image_09 from "../public/FB_image.webp"

const Gallery = () => {
  const [clickedImg, setClickedImg] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleClick = (item, index) => {
    setCurrentIndex(index)
    setClickedImg(item.link)
  }

  const handleRotationRight = () => {
    const totalLength = data.data.length

    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0)
      const newUrl = data.data[0].link
      setClickedImg(newUrl)
      return
    }
    const newIndex = currentIndex + 1
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex
    })
    const newItem = newUrl[0].link

    setClickedImg(newItem)
    setCurrentIndex(newIndex)
  }

  const handleRotationLeft = () => {
    const totalLength = data.data.length

    if (currentIndex === 0) {
      setCurrentIndex(totalLength)
      const newUrl = data.data[totalLength - 1].link
      setClickedImg(newUrl)
      return
    }
    const newIndex = currentIndex - 1
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex
    })
    const newItem = newUrl[0].link

    setClickedImg(newItem)
    setCurrentIndex(newIndex)
  }

  return (
    <>
      <h1 className="pt-8 mb-8 text-5xl text-center text-ba-color-gold">
        Galleri
      </h1>
      <div className="mx-auto lg:max-w-5xl">
        <div className="hidden md:block h-[400px] mb-4  mx-auto  md:w-[615px]  lg:w-[930px]">
          <Carousel slideInterval={5000} className="rounded-md">
            <Image src={image_01} alt="..." className="rounded-md" priority />
            <Image src={image_02} width={930} height={400} alt="..." />
            <Image src={image_03} width={930} height={400} alt="..." />
          </Carousel>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 pb-6 mx-auto md:flex-row">
          <Image
            className="rounded-md w-[90%] max-w-[425px]  md:w-[300px] md:h-[200px] h-[auto] object-cover hover:cursor-pointer"
            src={image_04}
            alt="..."

            // onClick={() => handleClick(image_01, 1)}
          />
          <Image
            className="rounded-md w-[90%] max-w-[425px]  md:w-[300px] md:h-[200px] h-[auto] object-cover hover:cursor-pointer"
            src={image_05}
            alt="..."

            // onClick={() => handleClick(image_01, 1)}
          />
          <Image
            className="rounded-md w-[90%] max-w-[425px]  md:w-[300px] md:h-[200px] h-[auto] object-cover hover:cursor-pointer"
            src={image_06}
            alt="..."

            // onClick={() => handleClick(image_01, 1)}
          />
          <Image
            className="rounded-md w-[90%] max-w-[425px]  md:w-[300px] md:h-[200px] h-[auto] object-cover hover:cursor-pointer"
            src={image_07}
            alt="..."

            // onClick={() => handleClick(image_01, 1)}
          />
          <Image
            className="rounded-md w-[90%] max-w-[425px]  md:w-[300px] md:h-[200px] h-[auto] object-cover hover:cursor-pointer"
            src={image_08}
            alt="..."

            // onClick={() => handleClick(image_01, 1)}
          />
          <Image
            className="rounded-md w-[90%] max-w-[425px]  md:w-[300px] md:h-[200px] h-[auto] object-cover hover:cursor-pointer"
            src={image_09}
            alt="..."

            // onClick={() => handleClick(image_01, 1)}
          />
        </div>
        {clickedImg && (
          <Overlay
            clickedImg={clickedImg}
            setClickedImg={setClickedImg}
            handleRotationRight={handleRotationRight}
            handleRotationLeft={handleRotationLeft}
          />
        )}
      </div>
    </>
  )
}

export default Gallery

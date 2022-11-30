import React from "react"
import Image from "next/image"
import data from "./galleri/images.json"

const Gallery = () => {
  return (
    <>
      <h1 className="pt-8 mb-8 text-5xl text-center text-ba-color-gold">
        Galleri
      </h1>
      <div className="flex flex-col flex-wrap md:flex-row max-w-[1024px] items-center justify-center mx-auto gap-4 pb-6 ">
        {data.data.map((item, index) => (
          <Image
            className="rounded-md w-[80%] max-w-[300px] md:w-[300px] md:h-[200px] h-[auto] object-cover"
            key={index}
            src={`/${item.link}`}
            width={400}
            height={300}
            alt={item.text}
            onClick={() => handleClick(item, index)}
          />
        ))}
      </div>
    </>
  )
}

export default Gallery

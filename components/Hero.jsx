import Image from "next/image"
import Link from "next/link"
import React from "react"
import FrontPic from "../images/index/frontpic.png"

const Hero = () => {
  return (
    <div className="mx-auto text-white lg:max-w-5xl">
      <div>
        <Image
          className="w-full "
          src={FrontPic}
          width={1300}
          alt="club members flexing muscles"
        />
        <h1 className="relative text-center xxs:bottom-7 text-l bottom-6 text-ba-color-gold md:text-3xl md:bottom-12 lg:text-4xl lg:bottom-20 lg:mt-5">
          Bergen Armwrestling
        </h1>
      </div>
      <div>
        <h2 className="mb-3 text-base text-center text-ba-color-gold md:text-2xl lg:text-3xl">
          Samaribeidspartnere
        </h2>
        <div>
          {/* <Image /> */}
          {/* <Image /> */}
          {/* <Image /> */}
          {/* <Image /> */}
        </div>
        <div>{/* Goldline */}</div>
      </div>
      <div>
        {/* <Image /> */}
        <div className="w-4/5 mx-auto text-sm">
          <p className="font-bold ">
            Håndbak eller armbrytning strekker seg helt tilbake til de olympiske
            leker i Athen. I det siste har vi sett endringer i regler, stil og
            omfang.
          </p>
          <br />
          <p>
            Håndbak er en sosial og interessant sport, og en kamp varer som
            oftest mellom 1 - 2 sekunder. Mye avhenger av utøvers teknikk,
            muskelstyrke og hurtighet. I 1998 ble Norges Håndbak Forbund tatt
            opp som en del av Norges Bryteforbund.
          </p>
        </div>
        <div>{/* Goldline */}</div>
      </div>
      <div>
        {/* <Image /> */}
        <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
          <div className="mt-3 rounded-lg sm:mt-0">
            <Link href="/bli-medlem">
              <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-ba-color-gold lg:px-10 rounded-xl hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Bli medlem
              </button>
            </Link>
          </div>
          <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
            <Link href="/treningstider">
              <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white hover:bg-white hover:text-black shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Se treningstider
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

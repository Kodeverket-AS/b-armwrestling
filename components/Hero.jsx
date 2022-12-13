import Image from "next/image"
import Link from "next/link"
import React from "react"
import FrontPic from "../images/index/header_example2.png"
import logo_jobbjakt from "../public/JobbJakt.png"
import logo_antidoping from "../public/logo_antidoping.png"
import logo_nbf from "../public/logo_nbf.svg"
import logo_anthrax from "../public/logo_anthrax.png"
import logo_deltaker_blue from "../public/logo_deltaker_blue.png"
import logo_trimtex from "../images/index/TSA.svg"
import logo_accountor from "../images/index/accountor.svg"
import Head from "next/head"

const Hero = () => {
  return (
    <>
      <Head>
        <title>Bergen Armwrestling Club</title>
        <meta
          name="description"
          content="Bergen Armwresting Club er en håndbakklubb som ligger sentralt i Bergen, og vil ha med deg"
        />
      </Head>
      <div className="pb-20 mx-auto text-white lg:max-w-5xl">
        <div>
          <div>
            <Image
              className="w-full "
              src={FrontPic}
              width={1300}
              alt="Gruppebilde av klubbens medlemmer"
              priority
            />
            <h1 className="relative pt-2 mb-4 text-2xl font-bold text-center md:pt-0 text-ba-color-gold md:text-3xl md:mb-0 md:bottom-12 lg:text-4xl lg:bottom-20 lg:mt-5">
              Bergen Armwrestling Club
            </h1>
          </div>

          {/* Hero Text  */}
          <div>
            <div className="w-4/5 mx-auto text-sm">
              <p className="font-bold ">
                Håndbak eller armbrytning strekker seg helt tilbake til de
                olympiske leker i Athen. I det siste har vi sett endringer i
                regler, stil og omfang.
              </p>
              <br />
              <p>
                Håndbak er en sosial og interessant sport, og en kamp varer som
                oftest mellom 1 - 2 sekunder. Mye avhenger av utøvers teknikk,
                muskelstyrke og hurtighet. I 1998 ble Norges Håndbak Forbund
                tatt opp som en del av Norges Bryteforbund.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto my-8">
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
          <div className="h-0.5 bg-gradient-to-r from-transparent via-ba-color-gold to-transparent w-[90%] max-w-[325px] mx-auto mt-8 mb-4 md:my-6"></div>
          {/* Samarbeidspartnere  */}
          <h2 className="mb-6 text-xl font-bold text-center text-ba-color-gold md:text-2xl lg:text-3xl">
            Samarbeidspartnere
          </h2>
          <div className="grid grid-cols-1 content-around gap-y-12 mx-auto text-center justify-items-center md:grid-cols-3 md:w-[700] justify-center items-center ">
            <div>
              <Image
                className="mx-auto"
                src={logo_antidoping}
                alt="Logoen til Antidoping Norge"
                width={75}
              />
              <p>Antidoping Norge</p>
            </div>

            <div>
              <Image
                className="mx-auto"
                src={logo_nbf}
                alt="Logoe til Norges Bryteforbund"
                width={75}
              />
              <p>Norges bryteforbund</p>
            </div>
            <div className="flex flex-col justify-end">
              <Image
                className="m-auto"
                src={logo_trimtex}
                alt="Logoen til Trimtex Sport AS"
              />
              <p>Trimtex Sport AS</p>
            </div>
            <div className="flex flex-col justify-end">
              <Image
                className="m-auto"
                src={logo_deltaker_blue}
                width={175}
                alt="Logoen til deltager.no"
              />
              <p>Deltager.no</p>
            </div>
            <div>
              <Image
                className="mx-auto invert"
                src={logo_anthrax}
                width={100}
                alt="Logoen til Anthrax Sportswear"
              />
              <p>Anthrax Sportswear</p>
            </div>
            <div className="flex flex-col justify-end ">
              <Image
                className="m-auto"
                src={logo_accountor}
                width={175}
                alt="Logoen til Accountor"
              />
              <p>Accountor</p>
            </div>
            <div className="md:col-span-3">
              <Image
                className="mx-auto"
                src={logo_jobbjakt}
                alt="Logoen til Jobbjakt"
                width={100}
              />
              <p>Jobbjakt</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero

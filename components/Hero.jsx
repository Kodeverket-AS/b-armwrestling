import Image from "next/image"
import Link from "next/link"
import React from "react"
import FrontPic from "../images/index/frontpic.png"
import logo_jobbjakt from "../public/JobbJakt.png"
import logo_antidoping from "../public/logo_antidoping.png"
import logo_nbf from "../public/logo_nbf.svg"
import logo_anthrax from "../public/logo_anthrax.png"
import logo_deltaker_blue from "../public/logo_deltaker_blue.png"

const Hero = () => {
  return (
    <div className="pb-20 mx-auto text-white lg:max-w-5xl">
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
      <div>
        <h2 className="mb-4 text-xl font-bold text-center text-ba-color-gold md:text-2xl lg:text-3xl">
          Samaribeidspartnere
        </h2>
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 w-4/6 max-w-[1024px] mx-auto mb-4 text-lg text-white">
            <div className="flex flex-col items-center justify-center gap-2 w-[75px]">
              <Image src={logo_jobbjakt} alt="Logoen til jobbjakt"/>
              <h2>Jobbjakt</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image
                src={logo_antidoping}
                alt="Logoen til Antidoping Norge"
                className=" w-[75px]"
              />
              <h2>Antidoping Norge</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image src={logo_nbf} alt="Logoen til Norges Bryteforbund" className=" w-[75px]" />
              <h2>Norges Bryteforbund</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <svg
                width="131"
                height="24"
                viewBox="0 0 131 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.947 0h-15.58l-0.956 5.63h4.776l-0.956 5.691h-2.106l-2.125 12.674h6.194l2.125-12.674h2.106l0.956-5.691h4.61l0.956-5.63zM46.513 0h-6.194l-1.889 11.321h-2.106l-2.111 12.674h6.194l2.111-12.674h2.106l1.889-11.321zM60.702 11.303l-1.021-11.303h-8.245l-1.908 11.316h-2.111l-1.82 10.827-0.309 1.852h5.423l2.092-12.679 1.427 12.679h3.963l5.441-12.679-2.199 12.679h6.203l2.111-12.679h2.111l1.889-11.316h-8.268l-4.781 11.303zM92.282 0h-15.58l-0.956 5.63h4.776l-0.956 5.691h-2.106l-2.125 12.674h6.194l2.125-12.674h2.106l0.956-5.691h4.61l0.956-5.63zM31.871 11.321h2.106c0.406-0.679 0.734-1.52 0.924-2.559 0.106-0.591 0.166-1.247 0.166-1.977 0-0.42-0.023-0.808-0.065-1.178-0.037-0.309-0.088-0.6-0.148-0.882-0.152-0.693-0.388-1.279-0.679-1.783-1.691-2.933-5.344-2.938-6.97-2.938h-7.279l-1.908 11.316h-2.106l-2.129 12.679h6.194l1.492-8.91h1.169l2.166 8.91h6.6l-2.582-10.046c0.051-0.023 0.111-0.051 0.166-0.079 0.873-0.411 2.037-1.136 2.882-2.55zM25.164 5.63h1.709c1.252 0.125 1.885 0.808 1.76 1.843-0.065 0.54-0.171 0.961-0.309 1.289-0.536 1.279-1.575 1.136-2.822 1.136h-1.049l0.707-4.268zM96.203 18.6l0.794-4.73h7.007l0.439-2.55h2.111l0.443-2.554-7.030-0.005 0.531-3.132 8.61-0.005 0.915-5.626h-14.762l-1.903 11.321h-2.111l-2.129 12.674h14.901l0.924-5.39-8.739-0.005zM121.229 11.321h2.111l7.589-11.321h-6.448l-3.423 5.607h-0.032l-1.492-5.607h-6.818l4 11.316v0.005h-2.106l-8.554 12.674h6.619l4.222-6.975 1.908 6.975h6.91l-4.485-12.674z"></path>
              </svg>
              <h2>TRIMTEX SPORT AS</h2>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <Image src={logo_deltaker_blue} className="max-w-[250px]" alt='Logoen til deltager.no'/>
              <h2>Deltaker.no</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image src={logo_anthrax} alt="Logoen til Anthrax Sportswear" />
              <h2>Anthrax Sportswear</h2>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="131"
                height="24"
                viewBox="0 0 865.3 134.6"
              >
                <path d="M149.5 134.6c-26.8 0-49.2-24.3-49.2-54.6 0-30.5 22.4-54.6 49.2-54.6 30.3 0 43.5 29.1 43.5 29.1l-22 12.6s-4.5-16.9-21.4-16.9C134.9 50.1 126 63.3 126 80c0 16.5 8.9 29.9 23.5 29.9 16.7 0 21.4-16.7 21.4-16.7l21.8 12.8c0-.1-12.9 28.6-43.2 28.6zm96.7 0c-26.8 0-49.2-24.3-49.2-54.6 0-30.5 22.4-54.6 49.2-54.6 30.3 0 43.5 29.1 43.5 29.1l-22 12.6s-4.5-16.9-21.4-16.9c-14.6 0-23.5 13.2-23.5 29.9 0 16.5 8.9 29.9 23.5 29.9 16.7 0 21.4-16.7 21.4-16.7l21.8 12.8c0-.2-13 28.5-43.3 28.5zM293 80c0-30.5 24.5-54.6 51.3-54.6 26.8 0 51.3 24.1 51.3 54.6 0 30.3-24.5 54.6-51.3 54.6-26.8 0-51.3-24.4-51.3-54.6zm76.4 0c0-16.7-10.5-29.5-25.1-29.5-14.6 0-25.1 12.8-25.1 29.5 0 16.5 10.5 29.5 25.1 29.5 14.6-.1 25.1-13.1 25.1-29.5zm125.5-51.6v103h-23.7l-2.1-8.4c-5.8 7-14.6 11.5-26.6 11.5-20.2 0-37.1-18.3-37.1-37.1v-69h25.7v62.8c0 9.9 7.2 18.5 17.5 18.5 9.1 0 15.9-1.6 20.4-10.1V28.4h25.9zm14.8 103.5v-103h23.7l2.1 8.4c5.8-7 14.6-11.5 26.6-11.5 20.2 0 37.1 18.3 37.1 37.1v69h-25.7V69c0-9.9-7.2-18.5-17.5-18.5-9.1 0-15.9 1.6-20.4 10.1v71.3h-25.9zM692.6 80c0-30.5 24.5-54.6 51.3-54.6s51.3 24.1 51.3 54.6c0 30.3-24.5 54.6-51.3 54.6s-51.3-24.4-51.3-54.6zm76.4 0c0-16.7-10.5-29.5-25.1-29.5-14.6 0-25.1 12.8-25.1 29.5 0 16.5 10.5 29.5 25.1 29.5 14.6-.1 25.1-13.1 25.1-29.5zm96.3-51.6v23.7h-7.2c-20.2 0-26.6 10.7-26.6 24.7v54.6h-26.2v-103h24.1l3.1 12.2c4.3-7 10.9-12.2 20.4-12.2h12.4zM94.1 107.8c-5.8 0-10.3-4.5-10.3-10.3V61c0-22.7-14.6-35.6-43.9-35.6-21 0-32.7 8.2-40 20.2v4.9L18 60.9s4.3-13.2 21.8-13.2c11.1 0 18.1 3.5 18.1 9.7 0 4.3-.8 9.3-22.7 12.8C22.7 72.1 6.4 75 .2 83.3v34.2c9.9 10.5 19.8 17.1 35.2 17.1 11.9 0 23.3-5.8 29.7-14.2 5.8 6.8 14.2 11.1 23.9 11.1h6.2v-23.7h-1.1zm-36-15.1c0 14.4-8.6 19.6-18.5 19.6-6 0-11.3-1.9-16.1-5.2V93.8c8.9-5.4 24.9-3.7 34.6-9.5v8.4zM689.8 29l-29.1-.1V.1L637 0v28.9l-29.2-.1v23.7l29.1.1-.1 29.3 23.7.1.1-29.4 29.1.1z" />
              </svg>
              {/* <h2>Account+or</h2> */}
            </div>
          </div>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-ba-color-gold to-transparent w-[90%] mx-auto mb-4"></div>
          {/* <Image /> */}
          {/* <Image /> */}
          {/* <Image /> */}
          {/* <Image /> */}
        </div>
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

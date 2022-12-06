import React from "react"
import Image from "next/image"
import logo_jobbjakt from "../../public/JobbJakt.png"
import logo_antidoping from "../../public/logo_antidoping.png"
import logo_nbf from "../../public/logo_nbf.svg"
import logo_anthrax from "../../public/logo_anthrax.png"
import logo_deltaker_blue from "../../public/logo_deltaker_blue.png"
import logo_accountor from "../../public/logo_accountor.svg"
import logo_trimtex from "../../public/logo_trimtex.svg"

const Samarbeidspartnere = () => {
  return (
    <section className="pt-4 bg-white">
      <h2 className="mb-4 text-xl font-bold text-center text-ba-color-gold md:text-2xl lg:text-3xl">
        Her er våre Samarbeidspartnere
      </h2>
      <div className="h-0.5 bg-gradient-to-r from-transparent via-ba-color-gold to-transparent w-[90%] mx-auto mb-4"></div>

      <div className="max-w-[1024px] mx-auto w-[90%]">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Partner logo={logo_jobbjakt} title="JobbJakt" />
          <Partner logo={logo_nbf} title="Norges Bryteforbund" />
          <Partner logo={logo_anthrax} title="Anthrax Sportswear" />
          <Partner logo={logo_deltaker_blue} title="Deltaker.no" />
          <Partner logo={logo_accountor} title="Deltaker.no" />
          <Partner logo={logo_trimtex} title="Trimtex" />
          <Partner logo={logo_antidoping} title="Antidoping Norge" />
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-center justify-center gap-4 w-4/5 max-w-[1024px] mx-auto mb-4 text-lg text-white">
          <div className="flex flex-col items-center justify-center gap-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Samarbeidspartnere
// w-[80px] h-[80px] md:h-[150px] md:w-[150px]
const Partner = ({ logo, title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[100px] h-[100px]  md:h-[150px] md:w-[150px]  ">
      <Image src={logo} alt={title}></Image>
      {/* <h3 className="text-xl">{title}</h3> */}
    </div>
  )
}

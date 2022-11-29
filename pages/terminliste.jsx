import React from "react"
import Image from "next/image"
import Link from "next/link"
import logo_wrestling from "../images/logo_wrestling.png"

const TermList = () => {
  return (
    <>
      <main>
        <h1 className="pt-8 mb-8 text-5xl text-center text-ba-color-gold">
          Terminliste
        </h1>
        {/* Events container  */}
        <div className="flex flex-col items-center justify-center gap-4 mx-auto md:flex-row">
          {/* Column 1  */}
          <div className="flex flex-col gap-4">
            <Event
              date="16.sept 17.sept"
              eventName="Verdens mesterskap"
              location="Analya, Tyrkia"
            />
            <Event
              date="16.sept 17.sept"
              eventName="Verdens mesterskap"
              location="Analya, Tyrkia"
            />
            <Event
              date="16.sept 17.sept"
              eventName="Verdens mesterskap"
              location="Analya, Tyrkia"
            />
            <Event
              date="16.sept 17.sept"
              eventName="Verdens mesterskap"
              location="Analya, Tyrkia"
            />
          </div>
          {/* Column 2  */}
          <div className="flex flex-col gap-4">
            <Event
              date="16.sept 17.sept"
              eventName="Verdens mesterskap"
              location="Analya, Tyrkia"
            />
            <Event
              date="16.sept 17.sept"
              eventName="Verdens mesterskap"
              location="Analya, Tyrkia"
            />
            <Event
              date="16.sept 17.sept"
              eventName="Verdens mesterskap"
              location="Analya, Tyrkia"
            />
            <Event
              date="16.sept 17.sept"
              eventName="Verdens mesterskap"
              location="Analya, Tyrkia"
            />
          </div>
        </div>
        {/* Disclaimer */}
        <p className="max-w-xl px-4 py-4 mx-auto text-white w-95/100">
          På{" "}
          <Link
            href="https://www.deltaker.no"
            target="_blank"
            className="underline text-ba-color-gold hover:text-purple-600"
          >
            deltaker.no
          </Link>{" "}
          finner man alt av informasjon om kommende arrangementer hvor du enkelt
          kan melde deg på ønsket arrengement. Vi gjør oppmerksom på at mer
          utfyllende informasjon først vil være tilgjengelig når arrengementet
          nærmer seg. For mer info rundt turneringer ber vi deg kontakte
          deltaker.no
        </p>
      </main>
    </>
  )
}

export default TermList

// Event takes date, eventName and Location as props
const Event = ({ date, eventName, location }) => {
  return (
    <div className="flex items-center max-w-xs gap-4 px-4 py-2 text-black bg-white border rounded-md justify-evenly w-95/100">
      <Image
        src={logo_wrestling}
        alt="logo"
        width={75}
        className="rounded-md"
      />

      <div>
        <p>{date}</p>
      </div>
      <div>
        <p>{eventName}</p>
      </div>

      <p>{location}</p>
    </div>
  )
}

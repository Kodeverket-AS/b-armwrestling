import React from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import logo_wrestling from "../images/logo_wrestling.png"
import { Timeline, Button } from "flowbite-react"

import { BsFillCalendarCheckFill } from "react-icons/bs"

import { AiOutlineArrowRight } from "react-icons/ai"
const TermList = () => {
  return (
    <>
      <Head>
        <title>Terminliste</title>
        <meta
          name="description"
          content="Termlist Bergen Armwrestling, lists arm wrestling competitions. "
        ></meta>
      </Head>
      <h1 className="pt-8 mb-8 text-5xl text-center text-ba-color-gold">
        Terminliste
      </h1>
      {/* Events container  */}

      <div className="flex justify-center items-center mx-auto w-[80%] max-w-[650px]">
        <Timeline>
          <Timeline.Item>
            <Timeline.Point icon={BsFillCalendarCheckFill} />
            <Timeline.Content>
              <Timeline.Time className="text-lg">
                18 - 19 Mars 2022
              </Timeline.Time>
              <Timeline.Title className="font-bold text-white ">
                Hardanger Open, Hardanger
              </Timeline.Title>
              <Timeline.Body className="text-gray-400">
                All Norwegian athletes must be a member of the Norges
                Bryteforbund. The athletes must have a license in the Norwegian
                Wrestling Federation before the start of the event. Contact your
                local club for more information. All foreign athletes (WAF
                members) must be a member of their national armwrestling
                federation, and bring a statement that confirms the membership.
              </Timeline.Body>
              <Button color="gray">
                <Link href="#" target="_blank">
                  Learn More
                </Link>
                <AiOutlineArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={BsFillCalendarCheckFill} />
            <Timeline.Content>
              <Timeline.Time className="text-lg">6 - 15 Mai 2022</Timeline.Time>
              <Timeline.Title className="font-bold text-white ">
                Europa Mesterskap, Romania
              </Timeline.Title>
              <Timeline.Body className="text-gray-400">
                All Norwegian athletes must be a member of the Norges
                Bryteforbund. The athletes must have a license in the Norwegian
                Wrestling Federation before the start of the event. Contact your
                local club for more information. All foreign athletes (WAF
                members) must be a member of their national armwrestling
                federation, and bring a statement that confirms the membership.
              </Timeline.Body>
              <Button color="gray">
                <Link href="#" target="_blank">
                  Learn More
                </Link>
                <AiOutlineArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={BsFillCalendarCheckFill} />
            <Timeline.Content>
              <Timeline.Time className="text-lg">Uke 25 2022</Timeline.Time>
              <Timeline.Title className="font-bold text-white">
                NM-veka, Skien
              </Timeline.Title>
              <Timeline.Body className="text-gray-400">
                All Norwegian athletes must be a member of the Norges
                Bryteforbund. The athletes must have a license in the Norwegian
                Wrestling Federation before the start of the event. Contact your
                local club for more information. All foreign athletes (WAF
                members) must be a member of their national armwrestling
                federation, and bring a statement that confirms the membership.
              </Timeline.Body>
              <Button color="gray">
                <Link href="#" target="_blank">
                  Learn More
                </Link>
                <AiOutlineArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={BsFillCalendarCheckFill} />
            <Timeline.Content>
              <Timeline.Time>16 - 17 September 2022</Timeline.Time>
              <Timeline.Title className="font-bold text-white">
                FjordFight, Sandefjord
              </Timeline.Title>
              <Timeline.Body className="text-gray-400">
                All Norwegian athletes must be a member of the Norges
                Bryteforbund. The athletes must have a license in the Norwegian
                Wrestling Federation before the start of the event. Contact your
                local club for more information. All foreign athletes (WAF
                members) must be a member of their national armwrestling
                federation, and bring a statement that confirms the membership.
              </Timeline.Body>
              <Button color="gray">
                <Link href="#" target="_blank">
                  Learn More
                </Link>
                <AiOutlineArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={BsFillCalendarCheckFill} />
            <Timeline.Content>
              <Timeline.Time>14 - 23 Oktober 2022</Timeline.Time>
              <Timeline.Title className="font-bold text-white">
                Verdens Mesterskap, Analaya, Tyrkia
              </Timeline.Title>
              <Timeline.Body className="text-gray-400">
                All Norwegian athletes must be a member of the Norges
                Bryteforbund. The athletes must have a license in the Norwegian
                Wrestling Federation before the start of the event. Contact your
                local club for more information. All foreign athletes (WAF
                members) must be a member of their national armwrestling
                federation, and bring a statement that confirms the membership.
              </Timeline.Body>
              <Button color="gray">
                <Link href="#" target="_blank">
                  Learn More
                </Link>
                <AiOutlineArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={BsFillCalendarCheckFill} />
            <Timeline.Content>
              <Timeline.Time>25 - 26 November 2022</Timeline.Time>
              <Timeline.Title className="font-bold text-white">
                Arms In Hell, Trondheim
              </Timeline.Title>
              <Timeline.Body className="text-gray-400">
                All Norwegian athletes must be a member of the Norges
                Bryteforbund. The athletes must have a license in the Norwegian
                Wrestling Federation before the start of the event. Contact your
                local club for more information. All foreign athletes (WAF
                members) must be a member of their national armwrestling
                federation, and bring a statement that confirms the membership.
              </Timeline.Body>
              <Button color="gray">
                <Link href="#" target="_blank">
                  Learn More
                </Link>
                <AiOutlineArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
      {/* Disclaimer */}
      <p className="px-4 py-4 mx-auto text-white w-[95%] max-w-[650px]">
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
    </>
  )
}

export default TermList

const TermList_old = () => {
  return (
    <>
      <Head>
        <title>Terminliste</title>
        <meta
          name="description"
          content="Termlist Bergen Armwrestling, lists arm wrestling competitions. "
        ></meta>
      </Head>
      <h1 className="pt-8 mb-8 text-5xl text-center text-ba-color-gold">
        Terminliste
      </h1>
      {/* Events container  */}
      <div className="grid grid-cols-1 md:grid-cols-2  w-[95%]  max-w-[768px] gap-4 justify-items-center mx-auto  content-center ">
        {/* Column 1  */}
        <div className="flex flex-col gap-4 w-[300px] md:justify-self-end">
          <Event
            date="16.sept 17.sept"
            eventName="Verdens mesterskap"
            location="Analya, Tyrkia"
          />
          <Event
            date="16.sept 17.sept"
            eventName="Verdens mesterskap"
            location="Istanbul, Tyrkia"
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
        <div className="flex flex-col gap-4 max-w-[300px] md:justify-self-start">
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
      <p className="px-4 py-4 mx-auto text-white w-[95%] max-w-[650px]">
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
    </>
  )
}

// Event takes date, eventName and Location as props
const Event = ({ date, eventName, location }) => {
  return (
    <div className="flex items-center max-w-xs gap-2 px-4 py-2 text-black bg-white border rounded-md justify-center w-[300px] mx-auto">
      <Image
        src={logo_wrestling}
        alt="armsport logo"
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

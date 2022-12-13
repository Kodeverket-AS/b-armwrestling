import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "flowbite-react";

// Used for Slideshow
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Used for photo gallery || requires --legacy-peer-deps
import Gallery from "react-photo-gallery-next";

import { AiFillCloseCircle } from "react-icons/ai";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import clubmembers from "../public/image1.webp";
import victory from "../public/group_01.webp";
import medals from "../public/group_02.webp";
import training from "../public/group_03.webp";
import flextraining from "../public/group_04.webp";
import trainingmedia from "../public/group_05.webp";
import twopersonarmwrestling from "../public/match_01.webp";
import youngandoldarmwrestling from "../public/match_02.webp";
import competitionwrestling from "../public/match_03.webp";
import clubphoto from "../public/FB_image.webp";

// For Slideshow
const slides = [
    clubmembers,
    victory,
    medals,
    training,
    flextraining,
    trainingmedia,
    twopersonarmwrestling,
    youngandoldarmwrestling,
    competitionwrestling,
    clubphoto,
];

// For gallery
const photos = [
    {
        src: "/image1.webp",
        width: 4,
        height: 1,
        priority: "priority",
        alt: "Glade medlemmer hos Bergen Armwrestling som poserer foran kamera",
    },
    {
        src: "/group_01.webp",
        width: 3,
        height: 1,
        alt: "Jubel, deltakere som har vunnet medalje står på scenen med hendene i været",
    },
    {
        src: "/group_02.webp",
        width: 2,
        height: 1,
        alt: "Seks deltakere som viser medaljer etter en turnering, og hvor den ene deltakeren har seiersbeltet rundt nakken",
    },
    {
        src: "/group_03.webp",
        width: 3,
        height: 1,
        alt: "Medlemmer som er i full gang med å trene i øvingslokalet",
    },
    {
        src: "/group_04.webp",
        width: 3,
        height: 1,
        alt: "To personer som bryter håndbak, mens andre medlemer viser muskler",
    },
    {
        src: "/group_05.webp",
        width: 3,
        height: 1,

        alt: "NRK er på besøk for å lage reportasje, hvor to deltakere er ikledd den ofisielle t-skjorten til Norges Bryteforbund",
    },
    {
        src: "/match_01.webp",
        width: 2,
        height: 2,
        alt: "To medlemmer som er i gang med å bryte håndbak under en trening",
    },
    {
        src: "/match_02.webp",
        width: 2,
        height: 2,
        alt: "En av de yngre deltakerene bryter håndbak med en eldre deltaker, mens to personer står å ser på",
    },
    {
        src: "match_03.webp",
        width: 1,
        height: 1,
        alt: "To kvinnelige deltakere som gjør seg klar til å bryte håndbak under en turnering, mens dommeren følger nøye med",
    },
    {
        src: "/FB_image.webp",
        width: 1,
        height: 1,
        alt: "Medlemmer fra Bergen Armwrestling som poserer forran kamera inne på øvingslokalet",
    },
];

const Galleri = () => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <Head>
                <title>Galleri</title>
                <meta
                    name='description'
                    content='Bildegalleriet til Bergen Armwrestling Club er en samling av håndbakbilder'
                ></meta>
            </Head>
            <h1 className='pt-8 text-5xl text-center md:mb-12 text-ba-color-gold'>
                Galleri
            </h1>
            <div className='items-center justify-center mx-auto my-4 lg:max-w-5xl'>
                {/* Carousel  */}
                <div className='mb-4 sm:h-64  w-full md:h-[400px]  hidden md:block px-2 mx-auto'>
                    <Carousel slideInterval={5000} className='rounded-none'>
                        <Image
                            src={clubmembers}
                            alt='Glade medlemmer hos Bergen Armwrestling som poserer foran kamera'
                            width={930}
                            height={400}
                            priority
                            className='rounded-none'
                        />
                        <Image
                            src={victory}
                            alt='Jubel, deltakere som har vunnet medalje står på scenen med hendene i været'
                            width={930}
                            height={400}
                            className='rounded-none'
                        />
                        <Image
                            src={medals}
                            alt='Seks deltakere som viser medaljer etter en turnering, og hvor den ene deltakeren har seiersbeltet rundt nakken'
                            width={930}
                            height={400}
                            className='rounded-none'
                        />
                    </Carousel>
                </div>
                <Gallery
                    photos={photos}
                    targetRowHeight={200}
                    placeholder='blur'
                    margin={6}
                    onClick={(e, photo) => {
                        setIndex(photo.index);
                    }}
                />
            </div>
            {/* Modal Solution */}
            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                styles={{
                    button: { color: "#ca9d3d", fontSize: "40px" },
                }}
                slides={slides}
                render={{
                    iconPrev: () => <BsArrowLeftCircle />,
                    iconNext: () => <BsArrowRightCircle />,
                    iconClose: () => <AiFillCloseCircle />,
                    slide: (image, offset, rect) => {
                        const width = Math.round(
                            Math.min(
                                rect.width,
                                (rect.height / image.height) * image.width
                            )
                        );
                        const height = Math.round(
                            Math.min(
                                rect.height,
                                (rect.width / image.width) * image.height
                            )
                        );
                        return (
                            <div
                                style={{ position: "relative", width, height }}
                            >
                                <Image
                                    fill
                                    src={image}
                                    loading='eager'
                                    placeholder='blur'
                                    alt={"alt" in image ? image.alt : ""}
                                    sizes={
                                        typeof window !== "undefined"
                                            ? `${Math.ceil(
                                                  (width / window.innerWidth) *
                                                      100
                                              )}vw`
                                            : `${width}px`
                                    }
                                />
                            </div>
                        );
                    },
                }}
            />
        </>
    );
};

export default Galleri;

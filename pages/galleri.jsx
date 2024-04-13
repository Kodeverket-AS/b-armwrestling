import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "flowbite-react";

// Used for Slideshow
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { AiFillCloseCircle } from "react-icons/ai";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import clubmembers from "../public/clubmembers.webp";
import victory from "../public/victory.webp";
import medals from "../public/medals.webp";
import training from "../public/training.webp";
import flextraining from "../public/flextraining.webp";
import trainingmedia from "../public/trainingmedia.webp";
import twopersonarmwrestling from "../public/twopersonarmwrestling.webp";
import youngandoldarmwrestling from "../public/youngandoldarmwrestling.webp";
import competitionwrestling from "../public/competitionwrestling.webp";
import clubphoto from "../public/clubphoto.webp";
import nm24 from "../public/nm24.jpg";
import heroNM from "../public/heroNM.png";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "hero",
                "schedule",
                "termlist",
                "gallery",
            ])),
        },
    };
}

// For Slideshow
const slides = [
    nm24,
    heroNM,
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

const Galleri = () => {
    const [index, setIndex] = useState(-1);
    const { t } = useTranslation("gallery");

    const handleClick = (e) => {
        let idx = Number(e.target.getAttribute("index"));
        setIndex(idx);
    };

    return (
        <>
            <Head>
                <title>Galleri</title>
                <meta
                    name='description'
                    content='Bildegalleriet til Bergen Armwrestling Club er en samling av håndbakbilder'
                />
            </Head>
            <h1 className='pt-8 text-5xl text-center md:mb-12 text-ba-color-gold'>
                {t("Gallery")}
            </h1>
            {/* Carousel and Gallery  */}
            <div className='items-center justify-center max-w-5xl mx-auto my-4 mb-12'>
                {/* Carousel  */}
                <div className='mb-4 sm:h-64  w-full md:h-[400px]  hidden md:block px-2 mx-auto'>
                    <Carousel slideInterval={5000} className='rounded-none '>
                        <Image
                            src={nm24}
                            alt={t("NMSolo")}
                            width={930}
                            height={400}
                            priority
                            className='object-cover hover:cursor-default'
                        />
                        <Image
                            src={victory}
                            alt={t("Victory")}
                            width={930}
                            height={400}
                            className=' hover:cursor-default'
                        />
                        <Image
                            src={medals}
                            alt={t("Medals")}
                            width={930}
                            height={400}
                            className=' hover:cursor-default'
                        />
                        <Image
                            src={heroNM}
                            alt={t("NMGroup")}
                            width={930}
                            height={400}
                            className=' hover:cursor-default'
                        />
                    </Carousel>
                </div>

                {/* Gallery  */}
                <div className='grid grid-cols-2 grid-rows-1 gap-1.5 mx-2 md:grid-cols-7 auto-rows-auto '>
                    <Image
                        src={nm24}
                        alt={t("NMSolo")}
                        className='rounded-sm col-span-2 md:col-span-7 lg:col-span-3.5  md:h-[425px] lg:h-[740px] '
                        index={0}
                        onClick={handleClick}
                    />
                    <Image
                        src={heroNM}
                        alt={t("NMGroup")}
                        className='rounded-sm col-span-2 md:col-span-7 lg:col-span-3.5  md:h-[425px] lg:h-[340px] '
                        index={1}
                        onClick={handleClick}
                    />
                    <Image
                        src={clubmembers}
                        alt={t("Clubmembers")}
                        className='rounded-sm col-span-2 md:col-span-7 lg:col-span-4  md:h-[425px] lg:h-[321px] '
                        index={2}
                        onClick={handleClick}
                    />
                    <Image
                        src={victory}
                        alt={t("Victory")}
                        className='rounded-sm col-span-2 md:col-span-4 lg:col-span-3 md:h-[334px] lg:h-[321px] '
                        index={3}
                        onClick={handleClick}
                    />
                    <Image
                        src={medals}
                        alt={t("Medals")}
                        className='rounded-sm h-full col-span-2  md:col-span-3 md:h-[334px] object-fit lg:col-span-3 lg:object-cover lg:h-[285px] '
                        onClick={handleClick}
                        index={4}
                    />
                    <Image
                        src={training}
                        alt={t("Training")}
                        className='rounded-sm h-full col-span-2 md:col-span-7 md:h-[360px] lg:col-span-4 lg:object-cover lg:h-[285px]'
                        onClick={handleClick}
                        index={5}
                    />
                    <Image
                        src={flextraining}
                        alt={t("Flextraining")}
                        className='rounded-sm h-full col-span-2 md:col-span-7 md:h-[360px] lg:col-span-4 lg:h-[280px] '
                        onClick={handleClick}
                        index={6}
                    />
                    <Image
                        src={trainingmedia}
                        alt={t("Trainingmedia")}
                        className='h-full col-span-2 rounded-sm md:col-span-5 lg:col-span-3 '
                        onClick={handleClick}
                        index={7}
                    />
                    {/* ONly visible on tablet  */}
                    <Image
                        src={twopersonarmwrestling}
                        alt={t("Two person armwrestling")}
                        className='hidden h-full col-span-1 rounded-sm md:block md:col-span-2 lg:hidden '
                        onClick={handleClick}
                        index={8}
                    />{" "}
                </div>

                {/* 3 last images on md, last 4 on lg */}
                <div className='grid grid-cols-2 gap-2 m-2 md:grid md:grid-cols-3 lg:grid-cols-4'>
                    <Image
                        src={twopersonarmwrestling}
                        alt={t("Two person armwrestling")}
                        className='h-full col-span-1 rounded-sm md:hidden lg:block lg:col-span-1'
                        onClick={handleClick}
                        index={9}
                    />
                    <Image
                        src={youngandoldarmwrestling}
                        alt={t("Young and old armwrestling")}
                        className='col-span-1 lg:col-span-1'
                        onClick={handleClick}
                        index={10}
                    />
                    <Image
                        src={competitionwrestling}
                        alt={t("Competition wrestling")}
                        className='col-span-1 lg:col-span-1'
                        onClick={handleClick}
                        index={11}
                    />
                    <Image
                        src={clubphoto}
                        alt={t("Clubphoto")}
                        className='h-full col-span-1 lg:col-span-1'
                        onClick={handleClick}
                        index={12}
                    />
                </div>
            </div>

            {/* Slideshow  */}
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
                        console.log(image);

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

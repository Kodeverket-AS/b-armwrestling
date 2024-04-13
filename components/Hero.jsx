import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroIMG3 from "../images/index/hero-img3.jpg";
import HeroNew from "../images/index/newHero_img.jpg";
import HeroNM from "../images/index/heroNM.png";
import logo_jobbjakt from "../public/JobbJakt.png";
import logo_antidoping from "../public/logo_antidoping.png";
import logo_nbf from "../public/logo_nbf.svg";
import logo_anthrax from "../public/logo_anthrax.png";
import logo_deltaker_blue from "../public/logo_deltaker_blue.png";
import logo_trimtex from "../images/index/TSA.svg";
import logo_accountor from "../images/index/accountor.svg";
import logo_grasrotandelen from "../images/diverseLinker/grasrotandelen.png";
import Head from "next/head";
import { useTranslation } from "next-i18next";

const Hero = () => {
    const { t } = useTranslation("hero");

    return (
        <>
            <Head>
                <title>Bergen Armwrestling Club</title>
                <meta
                    name='description'
                    content='Bergen Armwrestling Club er en håndbakklubb som ligger sentralt i Bergen, og vil ha med deg'
                />
            </Head>
            <div className='pb-20 mx-auto text-white lg:max-w-5xl'>
                <div>
                    <div>
                        <Image
                            className='w-full mt-4 '
                            src={HeroNM}
                            width={1000}
                            alt={t("Hero image")}
                            priority
                        />
                        <h1 className='relative pt-2 mb-4 text-2xl font-bold text-center md:pt-0 text-ba-color-gold md:text-2xl md:mb-0 md:bottom-10 lg:text-4xl lg:bottom-24 lg:mt-11'>
                            Bergen Armwrestling Club
                        </h1>
                    </div>

                    {/* Hero Text  */}
                    <div>
                        <div className='w-4/5 mx-auto text-sm'>
                            <p className='mb-6 text-2xl leading-10 text-center '>
                                {t("Armwrestling origin")}
                            </p>
                            <br />
                            {/* <p>{t("Armwrestling story")}</p> */}
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center w-full max-w-2xl gap-2 mx-auto my-8'>
                            <div className='mt-3 rounded-lg sm:mt-0'>
                                <Link href='/bli-medlem'>
                                    <button className='px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform lg:py-3 bg-ba-color-gold lg:px-7 lg:text-2xl lg:border-2 lg:border-ba-color-gold lg:hover:border-2 lg:hover:border-white rounded-xl hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                                        {t("Join button")}
                                    </button>
                                </Link>
                            </div>
                            <div className='mt-3 rounded-lg sm:mt-0 sm:ml-3'>
                                <Link href='/treningstider'>
                                    <button className='items-center block px-5  py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white hover:bg-white hover:text-black shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 lg:py-3 lg:px-7 lg:text-2xl'>
                                        {t("Nanana")}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='h-0.5 bg-gradient-to-r from-transparent via-ba-color-gold to-transparent w-[90%] max-w-[325px] mx-auto mt-8 mb-4 md:my-6'></div>
                    {/* Samarbeidspartnere  */}
                    <h2 className='mb-6 text-xl font-bold text-center text-ba-color-gold md:text-2xl lg:text-3xl'>
                        {t("Partners")}
                    </h2>
                    <div className='grid grid-cols-1 content-around gap-y-12 mx-auto text-center justify-items-center md:grid-cols-3 md:w-[700] justify-center items-center '>
                        <div>
                            <Link
                                href='https://www.antidoping.no/'
                                target='_blank'
                            >
                                <Image
                                    className='mx-auto'
                                    src={logo_antidoping}
                                    alt='Antidoping Norge logo'
                                    width={75}
                                />
                                <p>Antidoping Norge</p>
                            </Link>
                        </div>

                        <div>
                            <Link
                                href='https://bryting.no/brytegrener/handbak/'
                                target='_blank'
                            >
                                <Image
                                    className='mx-auto'
                                    src={logo_nbf}
                                    alt='Norges Bryteforbund logo'
                                    width={75}
                                />
                                <p>Norges bryteforbund</p>
                            </Link>
                        </div>
                        <div className='flex flex-col justify-end h-full'>
                            <Link
                                href='https://trimtexstore.no/?has-landed=true'
                                target='_blank'
                            >
                                <Image
                                    className='m-auto'
                                    src={logo_trimtex}
                                    alt='Trimtex Sport AS logo'
                                />
                                <p>Trimtex Sport AS</p>
                            </Link>
                        </div>
                        <div className='flex flex-col justify-end h-full'>
                            <Link
                                href='https://www.deltager.no/deltagerforside.aspx'
                                target='_blank'
                            >
                                <Image
                                    className='m-auto'
                                    src={logo_deltaker_blue}
                                    width={175}
                                    alt='deltager.no logo'
                                />
                                <p className='mt-2 '>Deltager.no</p>
                            </Link>
                        </div>
                        <div className='h-full'>
                            <Link
                                href='https://www.anthraxmachines.com/'
                                target='_blank'
                            >
                                <Image
                                    className='mx-auto invert'
                                    src={logo_anthrax}
                                    width={100}
                                    alt='Anthrax Sportswear logo'
                                />
                                <p>Anthrax Sportswear</p>
                            </Link>
                        </div>
                        <div className='flex flex-col justify-end h-full'>
                            <Link
                                href='https://www.accountor.com/nb/norway?gclid=Cj0KCQiAqOucBhDrARIsAPCQL1ZtpiXJb5xJ5ffSV9zEHScOpgUGyDeYZv9dsRGF5Zh4vj509LWE5u4aAknZEALw_wcB'
                                target='_blank'
                            >
                                <Image
                                    className='m-auto'
                                    src={logo_accountor}
                                    width={175}
                                    alt='Accountor logo'
                                />
                                <p>Accountor</p>
                            </Link>
                        </div>
                        <div className=''>
                            <Link href='https://jobbjakt.no/' target='_blank'>
                                <Image
                                    className='mx-auto'
                                    src={logo_jobbjakt}
                                    alt='Jobbjakt logo'
                                    width={95}
                                />
                                <p>Jobbjakt</p>
                            </Link>
                        </div>
                        <div className=''>
                            <Link
                                href='https://www.norsk-tipping.no/grasrotandelen/din-mottaker/825211012'
                                target='_blank'
                            >
                                <Image
                                    className='mx-auto'
                                    src={logo_grasrotandelen}
                                    alt='Grasrotandelen logo'
                                    width={120}
                                />
                                <p>Grasrotandelen</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

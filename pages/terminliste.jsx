import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo_wrestling from "../images/logo_wrestling.png";
import { Timeline, Button } from "flowbite-react";

import { BsFillCalendarCheckFill } from "react-icons/bs";

import { AiOutlineArrowRight } from "react-icons/ai";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

const Ikon = () => {
    return (
        <>
            <span class='absolute  flex h-6 w-6 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'></span>
            <BsFillCalendarCheckFill className='z-20 bg-ba-color-gold' />
        </>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "hero",
                "schedule",
                "termlist",
            ])),
        },
    };
}
const TermList = () => {
    const { t } = useTranslation("termlist");
    return (
        <>
            <Head>
                <title>{t("Title")}</title>
                <meta
                    name='description'
                    content='Terminliste for Bergen Armwrestling Club, vi konkurerer lokalt og internasjonalt. Påmelding skjer gjennom deltaker.no'
                ></meta>
            </Head>
            <h1 className='pt-8 mb-8 text-5xl text-center text-ba-color-gold'>
                {t("Title")}
            </h1>
            <p className='mb-10 text-lg text-center text-ba-color-gold'>
                Til info, så minner vi på at terminliste for 2023
                <br /> vil bli oppdatert så fort dette blir tilgjengelig på
                Deltaker.no
            </p>
            {/* Events container  */}

            <div className='flex justify-center items-center mx-auto w-[80%] max-w-[650px]'>
                <Timeline className='px-6'>
                    <Timeline.Item>
                        <Timeline.Point icon={Ikon} />
                        <Timeline.Content>
                            <Timeline.Time className='text-base italic text-white'>
                                {t("Hardanger date")}
                            </Timeline.Time>
                            <Timeline.Title className='font-bold text-ba-color-gold '>
                                {t("Hardanger")}
                            </Timeline.Title>
                            <Timeline.Body className='text-white'>
                                {t("Info championship")}
                            </Timeline.Body>
                            <Button
                                color='gray'
                                className='text-white bg-ba-color-gold transition duration-500 border-0 hover:bg-white hover:text-black hover:scale-105 md:h-full h-[2rem]'
                            >
                                <Link href='#' target='_blank'>
                                    {t("Read more")}
                                </Link>
                                <AiOutlineArrowRight className='w-3 h-3 ml-2' />
                            </Button>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={Ikon} />
                        <Timeline.Content>
                            <Timeline.Time className='text-base italic text-white'>
                                {t("Romania time")}
                            </Timeline.Time>
                            <Timeline.Title className='font-bold text-ba-color-gold '>
                                {t("Romania")}
                            </Timeline.Title>
                            <Timeline.Body className='text-white'>
                                {t("Info championship")}
                            </Timeline.Body>
                            <Button
                                color='gray'
                                className='text-white bg-ba-color-gold transition duration-500 border-0 hover:bg-white hover:text-black hover:scale-105 md:h-full h-[2rem]'
                            >
                                <Link href='#' target='_blank'>
                                    {t("Read more")}
                                </Link>
                                <AiOutlineArrowRight className='w-3 h-3 ml-2' />
                            </Button>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={Ikon} />
                        <Timeline.Content>
                            <Timeline.Time className='text-base italic text-white'>
                                {t("Skien time")}
                            </Timeline.Time>
                            <Timeline.Title className='font-bold text-ba-color-gold '>
                                {t("Skien")}
                            </Timeline.Title>
                            <Timeline.Body className='text-white'>
                                {t("Info championship")}
                            </Timeline.Body>
                            <Button
                                color='gray'
                                className='text-white bg-ba-color-gold transition duration-500 border-0 hover:bg-white hover:text-black hover:scale-105 md:h-full h-[2rem]'
                            >
                                <Link href='#' target='_blank'>
                                    {t("Read more")}
                                </Link>
                                <AiOutlineArrowRight className='w-3 h-3 ml-2' />
                            </Button>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={Ikon} />
                        <Timeline.Content>
                            <Timeline.Time className='text-base italic text-white'>
                                {t("Sandefjord time")}
                            </Timeline.Time>
                            <Timeline.Title className='font-bold text-ba-color-gold '>
                                {t("Sandefjord")}
                            </Timeline.Title>
                            <Timeline.Body className='text-white'>
                                {t("Info championship")}
                            </Timeline.Body>
                            <Button
                                color='gray'
                                className='text-white bg-ba-color-gold transition duration-500 border-0 hover:bg-white hover:text-black hover:scale-105 md:h-full h-[2rem]'
                            >
                                <Link href='#' target='_blank'>
                                    {t("Read more")}
                                </Link>
                                <AiOutlineArrowRight className='w-3 h-3 ml-2' />
                            </Button>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={Ikon} />
                        <Timeline.Content>
                            <Timeline.Time className='text-base italic text-white'>
                                {t("Turkey time")}
                            </Timeline.Time>
                            <Timeline.Title className='font-bold text-ba-color-gold '>
                                {t("Turkey")}
                            </Timeline.Title>
                            <Timeline.Body className='text-white'>
                                {t("Info championship")}
                            </Timeline.Body>
                            <Button
                                color='gray'
                                className='text-white bg-ba-color-gold transition duration-500 border-0 hover:bg-white hover:text-black hover:scale-105 md:h-full h-[2rem]'
                            >
                                <Link href='#' target='_blank'>
                                    {t("Read more")}
                                </Link>
                                <AiOutlineArrowRight className='w-3 h-3 ml-2' />
                            </Button>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={Ikon} />
                        <Timeline.Content>
                            <Timeline.Time className='text-base italic text-white'>
                                {t("Trondheim time")}
                            </Timeline.Time>
                            <Timeline.Title className='font-bold text-ba-color-gold '>
                                {t("Trondheim")}
                            </Timeline.Title>
                            <Timeline.Body className='text-white'>
                                {t("Info championship")}
                            </Timeline.Body>
                            <Button
                                color='gray'
                                className='text-white bg-ba-color-gold transition duration-500 border-0 hover:bg-white hover:text-black hover:scale-105 md:h-full h-[2rem]'
                            >
                                <Link href='#' target='_blank'>
                                    {t("Read more")}
                                </Link>
                                <AiOutlineArrowRight className='w-3 h-3 ml-2' />
                            </Button>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={Ikon} />
                        <Timeline.Content>
                            <Timeline.Time className='text-base italic text-white'>
                                {t("Romania time")}
                            </Timeline.Time>
                            <Timeline.Title className='font-bold text-ba-color-gold '>
                                {t("Romania")}
                            </Timeline.Title>
                            <Timeline.Body className='text-white'>
                                {t("Info championship")}
                            </Timeline.Body>
                            <Button
                                color='gray'
                                className='text-white bg-ba-color-gold transition duration-500 border-0 hover:bg-white hover:text-black hover:scale-105 md:h-full h-[2rem]'
                            >
                                <Link href='#' target='_blank'>
                                    {t("Read more")}
                                </Link>
                                <AiOutlineArrowRight className='w-3 h-3 ml-2' />
                            </Button>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>
            {/* Disclaimer */}
            <p className='px-4 py-4 mx-auto text-white w-[95%] max-w-[650px] mb-8'>
                {t("Body text")}{" "}
                <Link
                    href='https://www.deltaker.no'
                    target='_blank'
                    title={t("Link des")}
                    className='text-white underline hover:text-ba-color-gold'
                >
                    ”deltaker.no”
                </Link>{" "}
                {t("Body text part 2")}
            </p>
        </>
    );
};

export default TermList;

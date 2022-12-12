import { Accordion } from "flowbite-react";
import Head from "next/head";
import Link from "next/link";

import { useTranslation } from "react-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'hero',
        'schedule',
        'faq',
      ])),
      // Will be passed to the page component as props
    },
  }
}

const Faq = () => {
    const { t } = useTranslation('faq')

    return (
        <>
        <Head>
            <title>
                {t('Title')}
            </title>
            <meta
                name="desciption"
                content='Når og hvor trener vi? · Hvor får jeg "siste nytt" fra klubben? · Kan barn trene med oss?'
            />
        </Head>
            <h1 className='pt-8 mb-8 text-5xl text-center text-ba-color-gold'>
                {t('Title')}
            </h1>
            <div className='flex justify-center pb-20'>
                <Accordion
                    alwaysOpen={true}
                    flush={true}
                    className='w-3/4 text-white md:w-2/3 lg:w-1/2'
                >
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('When and where')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('When and where answare 1')}
                                </li>
                                <li>
                                    {t('When and where answare 2')}
                                </li>
                                <li>
                                    {t('When and where answare 3')} &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='https://www.facebook.com/groups/702890543475643'
                                        title={t('BAC FB group link des')}
                                    >
                                        “Bergen Armwrestling Club”
                                    </Link>
                                    &nbsp;, {t('When and where answare 3.5')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Parking')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Parking answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Wardrobe')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Wardrobe answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Bus')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Bus answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Last news')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Last news answare 1')} &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='https://www.facebook.com/groups/702890543475643'
                                        title={t("BAC FB group link des")}
                                    >
                                        “Bergen Armwrestling Club”
                                    </Link>
                                    {t('Last news answare 1.5')}
                                </li>
                                <li>
                                    {t('Last news answare 2')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Who trains here')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Who trains here answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Kids')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Kids answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Compete to join')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Compete to join answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Leaders')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Leaders answare 1')}
                                </li>
                                <li>
                                    {t('Leaders answare 2')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('First time')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('First time answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Training clothes')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Training clothes answare 1')}
                                </li>
                                <li>
                                    {t('Training clothes answare 2')}
                                </li>
                                <li>
                                    {t('Training clothes answare 3')}
                                </li>
                                <li>
                                    {t('Training clothes answare 4')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Cost')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Cost answare 1')}
                                </li>
                                <li>
                                    {t('Cost answare 2')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Who leads')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Who leads answare 1')}
                                    {/* Linkes til bilder av oss? */}
                                </li>
                                <li>
                                    {t('Who leads answare 2')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Rules')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Rules answare 1')}
                                </li>
                                <li>
                                    {t('Rules answare 2')}
                                </li>
                                <li>
                                    {t('Rules answare 3')}
                                </li>
                                <li>
                                    {t('Rules answare 4')}
                                </li>
                                <li>
                                    {t('Rules answare 5')}
                                </li>
                                <li>
                                    {t('Rules answare 6')}
                                </li>
                                <li>
                                    {t('Rules answare 7')} &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='http://www.waf-armwrestling.com/armwrestling-rules/'
                                        title={t('WAF link des')}
                                    >
                                        World Armwrestling Federation (WAF)
                                    </Link>
                                    &nbsp; {t('Rules answare 7.5')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Sit down')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Sit down answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Technique')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Technique answare 1')}
                                    <ul>
                                        <li>
                                            {t('Technique answare 2')}
                                        </li>
                                        <li>
                                            {t('Technique answare 3')}
                                        </li>
                                        <li>
                                            {t('Technique answare 4')}
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('More info technique')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('More info technique answare 1')} &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='https://www.youtube.com/c/voiceofarmwrestling'
                                        title={t('VoA link des')}
                                    >
                                        “Voice of Armwrestling”
                                    </Link>
                                    {t('More info technique answare 2')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Damage')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Damage answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Weight class')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Weight class answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Compete what I need')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Compete what I need answare 1')} &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='https://www.facebook.com/groups/702890543475643'
                                        title={t('BAC FB group link des')}
                                    >
                                        {t('FB group link')}
                                    </Link>
                                </li>
                                <li>
                                    {t('Compete what I need answare 2')}
                                    {/* not here */}
                                    <ul>
                                        <li>
                                            {t('Compete what I need answare 3')}
                                        </li>
                                        <li>
                                            {t('Compete what I need answare 4')} &nbsp;
                                            <Link
                                                className='underline hover:text-ba-color-gold'
                                                href='https://bryting.no/praktisk-info/lisens-og-forsikring/'
                                                title={t('Link Bryteforbundet des')}
                                            >
                                                Bryteforbundet
                                            </Link>
                                            {/* (link til lisensinfo) */}{t('Compete what I need answare 4.5')}
                                        </li>
                                        <li>
                                            {t('Compete what I need answare 5')} &nbsp;
                                            <Link
                                                className='underline hover:text-ba-color-gold'
                                                href='https://www.minidrett.no/'
                                                title={t('Link MinIdrett des')}
                                            >
                                                MinIdrett.no.
                                            </Link>
                                            {t('Compete what I need answare 5.5')}
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    {t('Compete what I need answare 6')}
                                </li>
                                <li>
                                    {t('Compete what I need answare 7')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Doping')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Doping answare')} &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='https://www.antidoping.no/medisinsk/dopinglisten'
                                        title={t('Doping list link des')}
                                    >
                                        {t('Doping list')}
                                    </Link>
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('National')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('National answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </>
    );
};

export default Faq;

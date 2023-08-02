import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

/*Pics from folder*/
import deltakerlogo from "../images/diverseLinker/Deltaker green only logo.png";
import NBF from "../images/diverseLinker/NBF-logo.png";
import rentil from "../images/diverseLinker/rent-il.png";
import WAF from "../images/diverseLinker/WAF2.png";
import Grasrot from "../images/diverseLinker/grasrotandelen.png";

/*Icons from React Icon*/
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "hero",
                "schedule",
                "faq",
                "links",
            ])),
            // Will be passed to the page component as props
        },
    };
}

export default function VariousLinks() {
    const { t } = useTranslation("links");
    return (
        <>
            <Head>
                <title>{t("Title")}</title>
                <meta
                    name='description'
                    content='Her finner du linker til relevante sider om håndbak, håndbakregler og flere av landets håndbakklubber.'
                />
            </Head>
            <h1 className='pt-8 mb-8 text-5xl text-center text-ba-color-gold'>
                {t("Title")}
            </h1>
            <section className='mx-4'>
                <div id='linksAndPics' className='text-white '>
                    <div className=' md:w-auto md:mx-4'>
                        <div className='md:flex md:flex-row md:justify-evenly  md:text-[18px]'>
                            <div
                                id='left__side'
                                className='flex flex-col content-center py-10 '
                            >
                                <Link
                                    className='flex flex-row items-center justify-between gap-10 mt-4'
                                    href='https://bryting.no/brytegrener/handbak/'
                                    target='_blank'
                                    title={t("NB link des")}
                                >
                                    Norges Bryteforbund
                                    <Image
                                        src={NBF}
                                        alt={t("NB logo des")}
                                        width={50}
                                    />
                                </Link>
                                <Link
                                    className='flex flex-row items-center justify-between mt-4'
                                    href='https://www.antidoping.no/'
                                    target='_blank'
                                    title={t("Antidoping link des")}
                                >
                                    Antidoping Norge
                                    <Image
                                        src={rentil}
                                        alt={t("Antidoping logo des")}
                                        width={50}
                                    />
                                </Link>
                                <Link
                                    className='flex flex-row items-center justify-between mt-4'
                                    href='https://www.deltager.no/deltagerforside.aspx'
                                    target='_blank'
                                    title={t("Deltaker link des")}
                                >
                                    Deltaker.no
                                    <Image
                                        src={deltakerlogo}
                                        alt={t("Deltaker logo des")}
                                        width={50}
                                    />
                                </Link>
                            </div>
                            <div
                                id='right__side'
                                className='flex flex-col py-10 md:px-5'
                            >
                                <Link
                                    className='flex flex-row items-center justify-between gap-10 mt-4'
                                    href='https://www.norsk-tipping.no/grasrotandelen/din-mottaker/825211012'
                                    target='_blank'
                                    title={t("Grasrot link des")}
                                >
                                    {t("Grasrot")}
                                    {/* <BiLink /> */}
                                    <Image
                                        src={Grasrot}
                                        alt={t("Grasrot logo des")}
                                        width={50}
                                    />
                                </Link>
                                <Link
                                    className='flex flex-row items-center justify-between gap-10 mt-4'
                                    href='https://www.youtube.com/channel/UClhMrYai_XGlBW_mRPhfQJQ'
                                    target='_blank'
                                    title={t("BryteTV link des")}
                                >
                                    {t("BryteTV")}
                                    {/* <BiLink /> */}
                                    <Image
                                        src={NBF}
                                        alt={t("NB logo des")}
                                        width={50}
                                    />
                                </Link>
                                <Link
                                    className='flex flex-row items-center justify-between gap-10 mt-4'
                                    href='https://www.youtube.com/@WORLDARMWRESTLINGFEDERATION/featured'
                                    target='_blank'
                                    title={t("WAFTV link des")}
                                >
                                    World Armwrestling Federation
                                    <br /> {t("WAFTV")}
                                    {/* <BiLink /> */}
                                    <Image
                                        src={WAF}
                                        alt={t("WAF logo des")}
                                        width={50}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='py-12 mt-6 md:mx-4 '>
                        <p className='pb-6 mb-6 text-2xl text-center text-ba-color-gold'>
                            {t("Others")}
                        </p>
                        <div className=' flex  justify-center text-2xl'>
                            <Link
                                className='flex flex-row items-center gap-5'
                                href='https://bryting.no/finn/'
                                target='_blank'
                                title={t("NB link des")}
                            >
                                Norges Bryteforbund
                                <Image
                                    src={NBF}
                                    alt={t("NB logo des")}
                                    width={50}
                                />
                            </Link>
                        </div>
                        {/* <div> */}
                        {/* <ul
                                id='klub__list'
                                className='md:flex md:flex-row md:justify-evenly  md:text-[18px]'
                            >
                                <div
                                    id='left__side'
                                    className='md:flex md:flex-col'
                                >
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Bergen Armwrestling Club
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://bergenarmwrestling.no/'
                                                target='_blank'
                                                title={t('BAW web link des')}
                                            >
                                                <BsGlobe />
                                            </Link>
                                            <Link
                                                href='https://www.instagram.com/bergen_armwrestling/'
                                                target='_blank'
                                                title={t('BAW IG link des')}
                                            >
                                                <BsInstagram />
                                            </Link>
                                            <Link
                                                href='https://www.facebook.com/people/Bergen-Armwrestling-Club/100063867946394/'
                                                target='_blank'
                                                title={t('BAW FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Christiania Håndbak Klubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='http://www.christianiaak.no/'
                                                target='_blank'
                                                title={t('Christiania web link des')}
                                            >
                                                <BsGlobe />
                                            </Link>
                                            <BsDot className='text-transparent ' />
                                            <BsDot className='text-transparent ' />
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Fredrikstad Håndbak-klubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://thomasas88.wixsite.com/fredrikstadhk?fbclid=IwAR30esLtuhXzdxCA0EYxOSlNPDFXcQoc0oolj-zD3VCPlQOJlbfOZxI9KI0'
                                                target='_blank'
                                                title={t('Fredrikstad web link des')}
                                            >
                                                <BsGlobe />
                                            </Link>
                                            <BsDot className='text-transparent ' />
                                            <Link
                                                href='https://www.facebook.com/fredrikstadhk/'
                                                target='_blank'
                                                title={t('Fredrikstad FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Gjerdrum Håndbakklubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://www.facebook.com/groups/1124104771091647/'
                                                target='_blank'
                                                title={t('Gjerdrum FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Hardanger Handbak Klubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://www.facebook.com/groups/1855217708058225/'
                                                target='_blank'
                                                title={t('Hardanger FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Jølster Handbakklubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='http://jolsterhandbak.no/?fbclid=IwAR0zZw9XEP8mlcFyrIcYF5tnCJ4g5bFHRUcOVYA5fq8Ig-FQcFtv89xluc0'
                                                target='_blank'
                                                title={t('Jølster web link des')}
                                            >
                                                <BsGlobe />
                                            </Link>
                                            <BsDot className='text-transparent ' />
                                            <Link
                                                href='https://www.facebook.com/JOLSTERHK/'
                                                target='_blank'
                                                title={t('Jølster FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Kristiansand Håndbakklubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://www.facebook.com/krs.haandbak/'
                                                target='_blank'
                                                title={t('Kristiansand FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Land Håndbakklubb
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Lindesnes Håndbakklubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <BsDot className='text-transparent ' />
                                            <Link
                                                href='https://www.instagram.com/lindesneshk/?igshid=sps52mx6bj8r&fbclid=IwAR3IJ4pcov4QVhJJGQKGr3vXuVX-x9pvyzmVx_X2zhwEoSH-qUeZa1T5olM'
                                                target='_blank'
                                                title={t('Lindesnes IG link des')}
                                            >
                                                <BsInstagram />
                                            </Link>
                                            <Link
                                                href='https://www.facebook.com/LindesnesHK/'
                                                target='_blank'
                                                title={t('Lindesnes FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Lærdal Handbakklubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://www.facebook.com/groups/1025447257487345/'
                                                target='_blank'
                                                title={t('Lærdal FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Masfjorden Håndbak klubb
                                    </li>
                                </div>

                                <div
                                    id='right__side'
                                    className='md:flex md:flex-col'
                                >
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Nidarø Håndbakklubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://www.facebook.com/nidarohandbak/'
                                                target='_blank'
                                                title={t('Nidarø FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Notodden Håndbakklubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://www.facebook.com/groups/1283951821979096/'
                                                target='_blank'
                                                title={t('Notodden FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Os Håndbak Klubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://www.facebook.com/groups/465887663538930/'
                                                target='_blank'
                                                title={t('Os FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Sandefjord Håndbak
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://www.sandefjord.kommune.no/globalassets/kultur-idrett-og-fritid/kif-dokumenter/lag-og-foreninger/sandefjord-handbak-flyer.pdf'
                                                target='_blank'
                                                title={t('Sandefjord web link des')}
                                            >
                                                <BsGlobe />
                                            </Link>
                                            <Link
                                                href='https://www.instagram.com/sandefjord_handbak/?fbclid=IwAR2IrDWSpxo-hOyczfEP6ZWYkdxAxBaGuSrQnZ_PAE0FyrHSfiBCSfAD2jM'
                                                target='_blank'
                                                title={t('Sandefjord IG link des')}
                                            >
                                                <BsInstagram />
                                            </Link>
                                            <Link
                                                href='https://www.facebook.com/sandefjordhandbak/'
                                                target='_blank'
                                                title={t('Sandefjord FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Skien Håndbak Klubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://www.facebook.com/Skienhk/'
                                                target='_blank'
                                                title={t('Skien FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Sportsklubben 1909
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://www.sportsklubben1909.no/p/62612/handbak'
                                                target='_blank'
                                                title={t('Sportsklubben web link des')}
                                            >
                                                <BsGlobe />
                                            </Link>
                                            <BsDot className='text-transparent ' />
                                            <Link
                                                href='https://www.facebook.com/groups/647060559786800?_gl=1*8z6e3w*_ga*MTk1OTkxNTg1Ni4xNjY3MzA2NDIz*_ga_FYY91S696B*MTY2ODYxMTc4NC40LjEuMTY2ODYxMTc5NS4wLjAuMA..'
                                                target='_blank'
                                                title={t('Sportsklubben FB link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Stavanger håndbakklubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://www.facebook.com/stavangerhaandbakklubb/'
                                                target='_blank'
                                                title={t('Stavanger web link des')}
                                            >
                                                <BsFacebook />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Stjørdal Håndbak klubb
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Stord Handbak Klubb
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='http://lindasgym.no/handbak/'
                                                target='_blank'
                                                title={t('Stord web link des')}
                                            >
                                                <BsGlobe />
                                            </Link>
                                            <Link
                                                href='https://www.instagram.com/stord_handbak/'
                                                target='_blank'
                                                title={t('Stord IG link des')}
                                            >
                                                <BsInstagram />
                                            </Link>
                                            <BsDot className='text-transparent ' />
                                        </div>
                                    </li>
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Voss Armsport Klubb
                                    </li>
                                </div>
                            </ul> */}
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

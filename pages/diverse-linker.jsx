import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

/*Pics from folder*/
import deltakerlogo from "../images/diverseLinker/Deltaker green only logo.png";
import NBF from "../images/diverseLinker/NBF-logo.png";
import rentil from "../images/diverseLinker/rent-il.png";

/*Icons from React Icon*/
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { BiLink } from "react-icons/bi";

export default function VariousLinks() {
    return (
        <>
            <Head>Diverse Linker</Head>
            <h1 className='pt-8 mb-8 text-5xl text-center text-ba-color-gold'>
                Diverse Linker
            </h1>
            <section className='mx-4'>
                <div
                    id='linksAndPics'
                    className='text-white md:flex-auto md:content-around '
                >
                    <div className='md:border-2 md:border-yellow-300 md:w-auto md:mx-4'>
                        <div className=' md:flex md:flex-row md:justify-between'>
                            <div
                                id='left__side'
                                className='flex flex-col py-10 md:border-red-500 md:border-2 md:px-5'
                            >
                                <Link
                                    className='flex flex-row justify-between mt-4'
                                    href='https://bryting.no/brytegrener/handbak/'
                                    target='_blank'
                                >
                                    Norges Bryteforbund
                                    <Image
                                        src={NBF}
                                        alt='ba shield'
                                        width={40}
                                    />
                                </Link>
                                <Link
                                    className='flex flex-row justify-between mt-4'
                                    href='https://www.antidoping.no/'
                                    target='_blank'
                                >
                                    Antidoping Norge
                                    <Image
                                        src={rentil}
                                        alt='ba shield'
                                        width={40}
                                    />
                                </Link>
                                <Link
                                    className='flex flex-row justify-between mt-4'
                                    href='https://www.deltager.no/deltagerforside.aspx'
                                    target='_blank'
                                >
                                    Deltaker.no
                                    <Image
                                        src={deltakerlogo}
                                        alt='ba shield'
                                        width={40}
                                    />
                                </Link>
                            </div>
                            <div
                                id='right__side'
                                className='flex flex-col py-10 md:border-blue-500 md:border-2 md:px-5'
                            >
                                <Link
                                    className='flex flex-row justify-between mt-4'
                                    href='https://www.norsk-tipping.no/grasrotandelen/din-mottaker/825211012'
                                    target='_blank'
                                >
                                    Støtt oss med din grasrot
                                    <BiLink />
                                </Link>
                                <Link
                                    className='flex flex-row justify-between mt-4'
                                    href='https://www.youtube.com/channel/UClhMrYai_XGlBW_mRPhfQJQ'
                                    target='_blank'
                                >
                                    NBF Bryte-TV på YouTube
                                    <BiLink />
                                </Link>
                                <Link
                                    className='flex flex-row justify-between mt-4'
                                    href='https://www.youtube.com/@WORLDARMWRESTLINGFEDERATION/featured'
                                    target='_blank'
                                >
                                    World Armwrestling Federation
                                    <br /> på YouTube
                                    <BiLink />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='py-12 mt-6 md:border-2 md:mx-4 '>
                        <p className='pb-6 text-2xl text-center text-ba-color-gold'>
                            Andre Håndbakklubber i Norge
                        </p>
                        <div>
                            <ul
                                id='klub__list'
                                className='md:flex md:flex-row md:justify-between md:px-20 md:text-[20px]'
                            >
                                <div
                                    id='left__side'
                                    className='md:flex md:flex-col'
                                >
                                    <li className='flex flex-row justify-between my-2 border-b-2 '>
                                        Bergen Armwrestling
                                        <div className='flex flex-row gap-4 ml-10'>
                                            <Link
                                                href='https://jobbjakt.no/'
                                                target='_blank'
                                                alt='Link til Webside'
                                            >
                                                <BsGlobe />
                                            </Link>
                                            <Link
                                                href='https://www.instagram.com/bergen_armwrestling/'
                                                target='_blank'
                                                alt='Link til Instagram'
                                            >
                                                <BsInstagram />
                                            </Link>
                                            <Link
                                                href='https://www.facebook.com/people/Bergen-Armwrestling-Club/100063867946394/'
                                                target='_blank'
                                                alt='Link til Facebook'
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
                                                alt='Link til Webside'
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
                                                alt='Link til Webside'
                                            >
                                                <BsGlobe />
                                            </Link>
                                            <BsDot className='text-transparent ' />
                                            <Link
                                                href='https://www.facebook.com/fredrikstadhk/'
                                                target='_blank'
                                                alt='Link til Facebook'
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
                                                alt='Link til Facebook'
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
                                                alt='Link til Facebook'
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
                                                alt='Link til Webside'
                                            >
                                                <BsGlobe />
                                            </Link>
                                            <BsDot className='text-transparent ' />
                                            <Link
                                                href='https://www.facebook.com/JOLSTERHK/'
                                                target='_blank'
                                                alt='Link til Facebook'
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
                                                alt='Link til Facebook'
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
                                                alt='Link til Instagram'
                                            >
                                                <BsInstagram />
                                            </Link>
                                            <Link
                                                href='https://www.facebook.com/LindesnesHK/'
                                                target='_blank'
                                                alt='Link til Facebook'
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
                                                alt='Link til Facebook'
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
                                                alt='Link til Facebook'
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
                                                alt='Link til Facebook'
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
                                                alt='Link til Facebook'
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
                                                alt='Link til Webside'
                                            >
                                                <BsGlobe />
                                            </Link>
                                            <Link
                                                href='https://www.instagram.com/sandefjord_handbak/?fbclid=IwAR2IrDWSpxo-hOyczfEP6ZWYkdxAxBaGuSrQnZ_PAE0FyrHSfiBCSfAD2jM'
                                                target='_blank'
                                                alt='Link til Instagram'
                                            >
                                                <BsInstagram />
                                            </Link>
                                            <Link
                                                href='https://www.facebook.com/sandefjordhandbak/'
                                                target='_blank'
                                                alt='Link til Facebook'
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
                                                alt='Link til Facebook'
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
                                                alt='Link til Webside'
                                            >
                                                <BsGlobe />
                                            </Link>
                                            <BsDot className='text-transparent ' />
                                            <Link
                                                href='https://www.facebook.com/groups/647060559786800?_gl=1*8z6e3w*_ga*MTk1OTkxNTg1Ni4xNjY3MzA2NDIz*_ga_FYY91S696B*MTY2ODYxMTc4NC40LjEuMTY2ODYxMTc5NS4wLjAuMA..'
                                                target='_blank'
                                                alt='Link til Facebook'
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
                                                alt='Link til Facebook'
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
                                                alt='Link til Webside'
                                            >
                                                <BsGlobe />
                                            </Link>
                                            <Link
                                                href='https://www.instagram.com/stord_handbak/'
                                                target='_blank'
                                                alt='Link til Instagram'
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
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

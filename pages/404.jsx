import Link from "next/link";
import Image from "next/image";

import fourofour from "../images/404.jpg";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'hero',
        'schedule',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function FourOFour() {
    return (
        <>
            <h1 className='py-6 text-4xl font-bold text-center text-ba-color-gold'>
                404
            </h1>
            <div className='text-lg leading-10 text-center text-white '>
                <div className='my-6 '>
                    <p>Oh No!</p>
                    <p>Her må det ha skjedd en feil,</p>{" "}
                    <p>for dette var jo ikke noe spennende</p>
                    <p>Men det går fint!</p>
                </div>
                <Link
                    className='px-4 text-2xl hover:text-ba-color-gold hover:font-bold'
                    href='/'
                >
                    Jeg vil hjem igjen
                </Link>
            </div>
        </>
    );
}

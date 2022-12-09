import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import inngang_narrow from "../public/inngang_narrow.png";

const Treningstider = () => {
    return (
        <>
            <Head>
                <title>Treningstider</title>
                <meta
                    name='description'
                    content='Bergen Armwrestling Club trener tirsdager klokken 19.00 til 21.00. Og dem ligger på gnisten aktivitetsenter.'
                />
            </Head>
            <h1 className='pt-8 mb-8 text-5xl text-center text-ba-color-gold '>
                Treningstider
            </h1>
            <section className='px-4 '>
                <div className='flex flex-row content-between text-white gap-9 '>
                    <p className='w-3/5 '>
                        <span className='text-lg font-bold leading-10 text-white'>
                            Treningstider: 19.00 - 21.00
                        </span>
                        <br /> Fortløpende oppdatert informasjon om trening,
                        arrangementer med mer legges ut på vår lukkete{" "}
                        <Link
                            className='underline hover:text-ba-color-gold'
                            href='https://www.facebook.com/profile.php?id=100063867946394'
                        >
                            Facebook gruppe
                        </Link>{" "}
                        for våre medlemmer. Vi trener fast hver tirsdag på
                        Gnisten Aktivitetssenter. Vi låner dette lokalet av
                        Bergen Kommune og ønsker et tett sammarbeid med dem for
                        å fremme klubben og idretten vår.
                    </p>
                    <Image
                        className='w-2/5 '
                        src={inngang_narrow}
                        alt='Inngang sett fra parkeringen'
                    ></Image>
                    {/* <p className='text-xs'>Inngang sett fra parkeringen</p> */}
                </div>
                <div>
                    <iframe
                        // xl:w-ba-width-large
                        className='mx-auto my-4 w-[100%] h-[350px] py-6  '
                        src='https://www.google.com/maps/embed/v1/place?key=AIzaSyA-eLtEdtB-XioubLC_9yUcxUja3xYrukI&q=Gnisten_Aktivitetssenter,Bergen'
                    />
                </div>
            </section>
        </>
    );
};

export default Treningstider;

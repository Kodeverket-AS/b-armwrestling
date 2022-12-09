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

            <section className='border-2 '>
                {/* block 1 */}

                <div className='flex text-white'>
                    <p className=''>Tirsdag</p>
                    <p className=''>19.00-21.00</p>

                    <div className=''>
                        <p>
                            Fortløpende oppdatert informasjon om trening,
                            arrangementer med mer legges ut på vår lukkete{" "}
                            <Link
                                className='underline hover:text-ba-color-gold'
                                href='https://www.facebook.com/profile.php?id=100063867946394'
                            >
                                Facebook gruppe
                            </Link>{" "}
                            for våre medlemmer.
                        </p>
                        <br />
                        <p>
                            Vi trener fast hver tirsdag på Gnisten
                            Aktivitetssenter. Vi låner dette lokalet av Bergen
                            Kommune og ønsker et tett sammarbeid med dem for å
                            fremme klubben og idretten vår.
                        </p>
                    </div>
                </div>

                {/* block 3 */}
                {/* className="mx-auto max-w-[800px] w-[90%] mb-4  justify-center items-center" */}
                <div className=''>
                    <div className=''>
                        <Image
                            src={inngang_narrow}
                            width={50}
                            alt='Inngang sett fra parkeringen'
                        ></Image>
                        <p className='text-center text-white md:mb-2'>
                            Inngang sett fra parkeringen
                        </p>
                    </div>
                </div>
                {/* block 2  */}
                <div className=''>
                    {/* className="mx-auto my-6 md:h-64 md:ml-0 md:max-w-lg md:w-[90%] md:mr-2"  */}
                    <iframe
                        // xl:w-ba-width-large
                        className='mx-auto my-4 w-[100%] h-[250px] md:ml-0 md:max-w-lg md:mr-2'
                        src='https://www.google.com/maps/embed/v1/place?key=AIzaSyA-eLtEdtB-XioubLC_9yUcxUja3xYrukI&q=Gnisten_Aktivitetssenter,Bergen'
                    />
                </div>
            </section>
        </>
    );
};

export default Treningstider;

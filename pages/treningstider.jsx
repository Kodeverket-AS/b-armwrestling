import Link from "next/link"

const Treningstider = () => {
    return (
        <>
            <h1
                className='pt-8 mb-8 text-5xl text-center text-ba-color-gold '           
            >
                Treningstider
            </h1>
            <div
                className="grid justify-center grid-cols-1 text-white md:max-w-5xl md:grid-cols-2 md:gap-12 md:mx-auto"
            >
                <div
                    className="grid md:grid-rows-2 md:justify-end md:h-48"
                >
                    <div
                        className="grid grid-cols-2 mb-4 text-2xl font-bold"
                    >
                        <p
                            className="grid justify-center h-0 md:mt-14 md:justify-start md:ml-10 xxs:mr-6 xs:mr-12"
                        >
                            Tirsdag
                        </p>
                        <p
                            className="grid justify-start md:mt-14 xs:ml-7 md:ml-2 lg:justify-center lg:ml-4"

                        >
                            19.00-21.00
                        </p>
                    </div>
                    <div
                        className="mx-10 lg:mt-4"
                    >
                        <p>
                            Fortløpende oppdatert informasjon om trening, arrangementer med mer legges ut på 
                            vår lukkete
                            {' '}
                            <Link
                                className='underline hover:text-ba-color-gold'
                                href="https://www.facebook.com/profile.php?id=100063867946394"
                            >
                                Facebook gruppe
                            </Link>
                            {' '}
                            for våre medlemmer.
                        </p>
                        <br/>
                        <p>
                        Vi trener fast hver tirsdag på Gnisten Aktivitetssenter. Vi låner dette lokalet av 
                        Bergen Kommune og ønsker et tett sammarbeid med dem for å fremme klubben og idretten 
                        vår.
                        </p>
                    </div>
                </div>
                <div
                    className="grid grid-cols-1 my-8 text-center"
                >
                    <iframe
                    // xl:w-ba-width-large
                        className="mx-auto my-6 md:h-64 md:ml-0 md:max-w-lg md:w-[90%] md:mr-2"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA-eLtEdtB-XioubLC_9yUcxUja3xYrukI&q=Gnisten_Aktivitetssenter,Bergen"
                    />
                </div>
            </div>
        </>
    )
}

export default Treningstider;
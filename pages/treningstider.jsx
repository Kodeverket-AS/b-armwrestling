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
                        className="grid grid-cols-2 gap-4 text-2xl"
                    >
                        <p
                            className="grid justify-center h-0 md:mt-14 md:justify-start md:ml-10"
                        >
                            Tirsdag
                        </p>
                        <p
                            className="grid justify-center md:mt-14 "

                        >
                            19.00-21.00
                        </p>
                    </div>
                    <div
                        className="mx-10"
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
                        className="mx-auto my-6 md:w-80 md:h-64 md:ml-0 xl:w-ba-width-large"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA-eLtEdtB-XioubLC_9yUcxUja3xYrukI&q=Gnisten_Aktivitetssenter,Bergen"
                    />
                </div>
            </div>
        </>
    )
}

export default Treningstider;
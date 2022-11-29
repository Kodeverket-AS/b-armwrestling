import Link from "next/link"

const Treningstider = () => {
    return (
        <>
            <h1
                className='pt-8 mb-8 text-5xl text-center text-ba-color-gold'            
            >
                Treningstider
            </h1>
            <div
                className="grid justify-center grid-cols-1 text-white md:grid-cols-2 md:gap-12"
            >
                <div
                    className="grid h-24 md:grid-rows-2 md:justify-end md:h-48"
                >
                    <div
                        className="grid grid-cols-2 gap-4 text-2xl"
                    >
                        <p
                            className="grid justify-center h-0 md:mt-14 md:justify-start md:ml-6"
                        >
                            Tirsdag
                        </p>
                        <p
                            className="grid justify-center md:mt-14"

                        >
                            19.00-21.00
                        </p>
                    </div>
                    <div
                        // className="grid justify-center w-4/5 grid-cols-1 my-8 text-center"
                        // className="flex justify-center w-4/5 text-center"
                        // className="w-2/3"
                    >
                        <p
                            // className="justify-end "
                            className="text-center w-96"
                        >
                            Følg oss på
                            {' '}
                            <Link
                                className='underline hover:text-ba-color-gold'
                                href="https://www.facebook.com/profile.php?id=100063867946394"
                            >
                                facebook
                            </Link>
                            {' '}
                            for den meste oppdaterte infomasjonen
                        </p>
                    </div>
                </div>
                <div
                    className="grid grid-cols-1 my-8 text-center"
                >
                    <iframe
                        className="mx-auto my-6 md:w-80 md:h-64 md:ml-0 lg:w-96"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA-eLtEdtB-XioubLC_9yUcxUja3xYrukI&q=Gnisten_Aktivitetssenter,Bergen"
                    />
                </div>
            </div>
        </>
    )
}

export default Treningstider;
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logov2.png";
import { useTranslation } from "next-i18next";

const Footer = () => {
    const { t } = useTranslation("common");

    return (
        <footer className='w-full p-4 shadow bg-zinc-900 md:px-6 md:py-8'>
            <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center '>
                <div className='sm:flex sm:items-center sm:justify-between'>
                    {/* Added justify center on mobile to fix break on 320px */}
                    <Link
                        href='/'
                        className='flex items-center justify-center mb-4 sm:mb-0'
                    >
                        <Image
                            src={Logo}
                            width={50}
                            alt='Bergen Armwrestling Logo'
                        />

                        <span className='ml-2.5 self-center text-xl font-semibold whitespace-nowrap text-white xxs:text-2xl'>
                            Bergen Armwrestling Club
                        </span>
                    </Link>

                    <ul className='flex flex-wrap items-center justify-center mb-6 text-sm text-gray-400 sm:mb-0'>
                        <li>
                            <Link
                                href='https://www.facebook.com/groups/702890543475643/'
                                className='mr-4 hover:underline md:mr-6'
                                target='_blank'
                            >
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='https://www.instagram.com/bergen_armwrestling/'
                                className='mr-4 hover:underline md:mr-6 '
                                target='_blank'
                            >
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/bli-medlem'
                                className='hover:underline'
                            >
                                {t("Button")}
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className='my-6 border-gray-700 sm:mx-auto lg:my-8' />
                <div className='flex flex-col items-center justify-center mx-auto md:flex-row'>
                    <span className='block text-sm text-center text-gray-400 sm:text-center'>
                        Utviklet i regnet av{" "}
                        <a
                            className=' hover:border-b'
                            href='https://www.kodeverketbergen.no/'
                            target='_blank'
                        >
                            Kodeverket Bergen © 2025
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

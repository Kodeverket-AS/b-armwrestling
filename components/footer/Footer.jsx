import Link from "next/link";
import Image from "next/image";
import Logo from "../../images/logov2.png";

const Footer = () => {
    return (
        <footer className='w-full p-4 shadow bg-zinc-900 md:px-6 md:py-8'>
            <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center '>
                <div className='sm:flex sm:items-center sm:justify-between'>
                    <Link href='/' className='flex items-center mb-4 sm:mb-0'>
                        <Image
                            src={Logo}
                            width={50}
                            alt='Bergen Armwrestling Logo'
                        />

                        <span className='ml-2.5 self-center text-xl font-semibold whitespace-nowrap text-white xxs:text-2xl'>
                            Bergen Armwrestling
                        </span>
                    </Link>
                    <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-400 sm:mb-0'>
                        <li>
                            <Link
                                href='#'
                                className='mr-4 hover:underline md:mr-6'
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='#'
                                className='mr-4 hover:underline md:mr-6 '
                            >
                                Licensing
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:underline'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className='my-6 border-gray-700 sm:mx-auto lg:my-8' />
                <span className='block text-sm text-gray-400 sm:text-center'>
                    © 2022 Kodeverket Bergen | All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;

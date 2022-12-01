import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../images/logov2.png"
import { MdArrowDropDown } from "react-icons/md"
const NavBar = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <nav className="w-full shadow bg-zinc-900">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
              <Image src={Logo} width={50} alt="Bergen Armwrestling Logo" />
              <span className="invisible lg:visible ml-2.5 self-center text-2xl font-semibold whitespace-nowrap text-white">
                Bergen Armwrestling
              </span>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="relative items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white">
                <Link href="/">Hjem</Link>
              </li>
              <li className="text-white">
                <Link href="/treningstider">Treningstider</Link>
              </li>
              <li className="text-white">
                <Link href="/faq">FAQ</Link>
              </li>
              <button className="items-center px-5 py-2 text-white peer hover:bg-ba-color-gold md:flex">
                Mer <MdArrowDropDown className="ml-2" />
              </button>
              <ul
                className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col drop-shadow-lg absolute bg-zinc-900 top-10 pt-7 z-10"
              >
                <li className="text-white hover:bg-ba-color-gold">
                  <Link href="/diverse-linker" className="px-5 py-3 md:block">
                    Diverse Linker
                  </Link>
                </li>
                <li className="text-white hover:bg-ba-color-gold">
                  <Link href="/terminliste" className="px-5 py-3 md:block">
                    Terminliste
                  </Link>
                </li>
                <li className="text-white hover:bg-ba-color-gold">
                  <Link href="/galleri" className="px-5 py-3 md:block">
                    Galleri
                  </Link>
                </li>
              </ul>
              <Link
                href="/bli-medlem"
              >
              <button className="z-20 px-4 py-4 text-center text-white transition duration-500 ease-in-out transform border lg:w-full w-36 border-ba-color-gold rounded-xl hover:bg-ba-color-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Meld Deg Inn
              </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

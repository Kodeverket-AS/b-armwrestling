import Image from 'next/image';
import React from 'react';
import FrontPic from '../images/index/frontpic.png'

const Hero = () => {
  return (
    // <div class='relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24'>
    //   <div class='flex w-full mx-auto text-left'>
    //     <div class='relative inline-flex items-center mx-auto align-middle'>
    //       <div class='text-center'>
    //         <h1 class='max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl'>
    //           Long headline to turn <br class='hidden lg:block' />
    //           your visitors into users
    //         </h1>
    //         <p class='max-w-xl mx-auto mt-8 text-base leading-relaxed text-white'>
    //           Free and Premium themes, UI Kit's, templates and landing pages
    //           built with Tailwind CSS, HTML &amp; Next.js.
    //         </p>
    //         <div class='flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6'>
    //           <div class='mt-3 rounded-lg sm:mt-0'>
    //             <button class='px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform ba-bg-orange lg:px-10 rounded-xl hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
    //               Bli medlem
    //             </button>
    //           </div>
    //           <div class='mt-3 rounded-lg sm:mt-0 sm:ml-3'>
    //             <button class='items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white hover:bg-white hover:text-black shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
    //               Se treningstider
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='mx-auto lg:max-w-5xl'>
      <div>
      <Image
        className='w-full '
        src={FrontPic}
        width={1300}
      />
      <h1
        className='relative text-xs text-center bottom-5 text-ba-color-gold md:text-3xl md:bottom-12 lg:text-4xl lg:bottom-20 lg:mt-5'
      >
        Bergen Armwrestling
      </h1>
      </div>
      <div>
        <h2>
          Samaribeidspartnere
        </h2>
        <div>
          {/* <Image /> */}
          {/* <Image /> */}
          {/* <Image /> */}
          {/* <Image /> */}
        </div>
        <div>
          {/* Goldline */}
        </div>
      </div>
      <div>
        {/* <Image /> */}
        <p>
        Håndbak eller armbrytning strekker seg helt tilbake til de olympiske leker i Athen. I det siste har vi sett endringer i regler, stil og omfang.
        </p>
        <p>
        Håndbak er en sosial og interessant sport, og en kamp varer som oftest mellom 1 - 2 sekunder. Mye avhenger av utøvers teknikk, muskelstyrke og hurtighet. I 1998 ble Norges Håndbak Forbund tatt opp som en del av Norges Bryteforbund.
        </p>
        <div>
          {/* Goldline */}
        </div>
      </div>
      <div>
        {/* <Image /> */}
        <button>Galleri</button>
      </div>
    </div>
  );
};

export default Hero;

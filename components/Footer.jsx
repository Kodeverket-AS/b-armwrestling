import Link from 'next/link';

const Footer = () => {
  return (
    <footer class='p-4 shadow md:px-6 md:py-8 bg-gray-900'>
      <div class='sm:flex sm:items-center sm:justify-between'>
        <Link
          href='https://flowbite.com/'
          class='flex items-center mb-4 sm:mb-0'
        >
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            class='mr-3 h-8'
            alt='Flowbite Logo'
          />
          <span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Flowbite
          </span>
        </Link>
        <ul class='flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400'>
          <li>
            <Link href='#' class='mr-4 hover:underline md:mr-6 '>
              About
            </Link>
          </li>
          <li>
            <Link href='#' class='mr-4 hover:underline md:mr-6'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href='#' class='mr-4 hover:underline md:mr-6 '>
              Licensing
            </Link>
          </li>
          <li>
            <Link href='#' class='hover:underline'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr class='my-6 sm:mx-auto border-gray-700 lg:my-8' />
      <span class='block text-sm sm:text-center text-gray-400'>
        © 2022{' '}
        <Link href='https://flowbite.com/' class='hover:underline'>
          Flowbite™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;

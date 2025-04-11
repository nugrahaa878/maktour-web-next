'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import maktourLogo from '../../../public/assets/images/maktour-logo.png';
import whatsappIcon from '../../../public/assets/icons/whatsapp.png';
import LanguageSwitcher from '../LanguageSwitcher';

type MobileMenuProps = {
  menuItems: Array<{ name: string; path: string }>;
};

export default function MobileMenuButton({ menuItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black bg-opacity-50">
          <div className="fixed inset-x-0 top-0 h-[100vh] w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out overflow-y-auto px-4 py-6">
            <div className='flex items-center justify-between'>
              <Link href="/" className="flex items-center">
                <Image
                  src={maktourLogo}
                  alt="Maktour Hajj Logo"
                  width={256}
                  height={256}
                  className="h-20 w-auto"
                />
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-black hover:text-amber-200 block px-3 py-3 text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button>
              <a
                href="https://wa.me/+6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2 ml-2 mt-4"
              >
                <Image src={whatsappIcon} alt='whatsapp' className='w-6' />
                <span className='font-bold'>Contact Us</span>
              </a>
            </button>

            <LanguageSwitcher isScrolled />
          </div>
        </div>
      )}
    </>
  );
}
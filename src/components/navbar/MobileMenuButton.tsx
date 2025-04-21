'use client';

import { useState, useEffect } from 'react';
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

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-500 hover:bg-gray-100 transition-colors duration-200"
          aria-expanded={isOpen}
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

      {/* Mobile menu overlay with animation */}
      <div
        className={`md:hidden fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40 ${isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu slide-in panel */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-[85%] max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="h-full flex flex-col">
          {/* Header with logo and close button */}
          <div className='flex items-center justify-between p-4 border-b border-gray-200'>
            <Link href="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
              <Image
                src={maktourLogo}
                alt="Maktour Hajj Logo"
                width={150}
                height={150}
                className="h-14 w-auto"
                priority
              />
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
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

          {/* Menu items */}
          <div className="flex-1 overflow-y-auto py-4 px-6">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block py-3 text-base font-medium text-gray-800 hover:text-amber-500 hover:bg-amber-50 rounded-md px-3 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Footer with language switcher and contact button */}
          <div className="p-6 border-t border-gray-200 space-y-4">
            {/* Language switcher with better mobile styling */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Language</span>
              <div className="w-auto">
                <LanguageSwitcher isScrolled={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
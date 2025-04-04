'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import MobileMenuButton from './MobileMenuButton';
import maktourLogo from '../../../public/assets/images/maktour-logo.png';
import whatsappIcon from '../../../public/assets/icons/whatsapp.png';

const menuItems = [
  { name: 'About Us', path: '/about-us' },
  { name: 'Umrah & Ziyarah', path: '/umrah' },
  { name: 'Hajj', path: '/hajj' },
  { name: 'Packages', path: '/providers' },
  { name: 'Plan With Us', path: '/guidelines' },
  { name: 'FAQ', path: '/faq' },
];

interface NavbarProps {
  isWhiteBackground?: boolean;
}

const Navbar = ({ isWhiteBackground = false }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(isWhiteBackground);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : isWhiteBackground ? 'bg-white' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center my-2">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src={maktourLogo}
                  alt="Maktour Hajj Logo"
                  width={256}
                  height={256}
                  className="h-20 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`hover:text-amber-500 px-3 py-2 text-md font-medium transition-colors duration-200 ${isScrolled || isWhiteBackground ? 'text-gray-800' : 'text-[#FFF9F9]'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className={`hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors duration-200 ${isScrolled || isWhiteBackground ? 'text-gray-800' : 'text-[#FFF9F9]'}`}>
                EN
              </button>
              <a
                href="https://wa.me/+6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <Image src={whatsappIcon} alt='whatsapp' className='w-6' />
                <span className='font-bold'>Contact Us</span>
              </a>
            </div>

            {/* Mobile Menu */}
            <MobileMenuButton menuItems={menuItems} />
          </div>
        </div>
      </nav>
      {isWhiteBackground && <div className="h-20" />}
    </>
  );
};

export default Navbar;
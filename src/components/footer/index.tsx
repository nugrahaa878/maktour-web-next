'use client'

import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import maktourLogo from '../../../public/assets/images/maktour-logo.png';
import useSubscribeNewsletter from '../../hooks/useSubscribeNewsletter';
import { useLanguage } from '@/context/LanguageContext';

const Footer: FC = () => {
  const [email, setEmail] = useState<string>('');
  const { subscribeNewsletter, isLoading } = useSubscribeNewsletter();
  const { language } = useLanguage();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email) {
      await subscribeNewsletter(email);
      setEmail('');
    }
  };

  // Translate text based on selected language
  const tncText = language === 'id' ? 'Syarat & Ketentuan' : 'Terms & Conditions';
  const privacyText = language === 'id' ? 'Privasi' : 'Privacy Policy';
  const quickLinksText = language === 'id' ? 'Tautan Cepat' : 'Quick Links';
  const subscribeText = language === 'id' ? 'Berlangganan Newsletter Kami' : 'Subscribe our Newsletter';
  const aboutUsText = language === 'id' ? 'Tentang Kami' : 'About Us';
  const umrahText = language === 'id' ? 'Umroh' : 'Umrah';
  const hajjText = language === 'id' ? 'Haji' : 'Hajj';
  const packagesText = language === 'id' ? 'Paket' : 'Packages';
  const helpText = language === 'id' ? 'Bantuan' : 'Help';

  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src={maktourLogo}
              alt="Maktour Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. laculis ridiculus cubilia
              libero egestas scelerisque; eleifend interdum mollis diam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6 .253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{quickLinksText}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-amber-600 transition-colors">
                  {aboutUsText}
                </Link>
              </li>
              <li>
                <Link href="/umrah" className="text-gray-300 hover:text-amber-600 transition-colors">
                  {umrahText}
                </Link>
              </li>
              <li>
                <Link href="/hajj" className="text-gray-300 hover:text-amber-600 transition-colors">
                  {hajjText}
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-amber-600 transition-colors">
                  {packagesText}
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-300 hover:text-amber-600 transition-colors">
                  {helpText}
                </Link>
              </li>
              <li>
                <Link href="/tnc" className="text-gray-300 hover:text-amber-600 transition-colors">
                  {tncText}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-amber-600 transition-colors">
                  {privacyText}
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-12 pb-8 border-gray-600">
            <h2 className="text-3xl font-bold mb-6">{subscribeText}</h2>
            <form onSubmit={handleSubscribe} className="flex sm:flex-row gap-2 max-w-2xl">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@gmail.com"
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-full text-white focus:outline-none focus:border-amber-600"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-shrink-0 bg-[#DCB04B] hover:bg-[#B68923] transition-colors rounded-full p-3 focus:outline-none w-12 cursor-pointer"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 text-center text-gray-300 border-t">
          <p>&copy; {new Date().getFullYear()} Maktour Copyright All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
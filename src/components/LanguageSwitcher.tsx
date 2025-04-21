import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  isScrolled: boolean;
}

const LanguageSwitcher = ({ isScrolled }: Props) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Check on resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: 'en' | 'id') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-between space-x-1 px-3 py-2 rounded-md transition-colors duration-200 ${isScrolled ? 'text-gray-700' : 'text-white'
          } ${isMobile ? 'w-28 bg-gray-50' : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="font-medium">{language === 'en' ? 'English' : 'Indonesia'}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`absolute right-0 ${isMobile ? 'bottom-full mb-1' : 'mt-1 top-full'} w-28 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-100`}>
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${language === 'en'
                ? 'bg-amber-50 text-amber-500'
                : 'text-gray-700 hover:bg-gray-50 hover:text-amber-500'
                }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('id')}
              className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${language === 'id'
                ? 'bg-amber-50 text-amber-500'
                : 'text-gray-700 hover:bg-gray-50 hover:text-amber-500'
                }`}
            >
              Indonesia
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 
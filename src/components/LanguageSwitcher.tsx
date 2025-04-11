import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: 'en' | 'id') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors duration-200 text-white cursor-pointer"
      >
        <span>{language.toUpperCase()}</span>
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
        <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-50">
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`block w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-gray-100 text-amber-500' : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('id')}
              className={`block w-full text-left px-4 py-2 text-sm ${language === 'id' ? 'bg-gray-100 text-amber-500' : 'text-gray-700 hover:bg-gray-100'
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
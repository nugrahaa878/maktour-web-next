'use client';

import { useState } from 'react';
import Link from 'next/link';

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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-white hover:text-amber-200 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-4">
              <button className="text-white hover:text-amber-200 block px-3 py-2 text-base font-medium">
                EN
              </button>
              <a
                href="https://wa.me/+6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors mt-2"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.958 17.887c-.337.924-1.658 1.687-2.73 1.912-.732.15-1.693.172-2.782-.12-.655-.172-1.368-.403-2.243-.777-3.732-1.619-6.157-5.381-6.337-5.627-.18-.246-1.457-1.937-1.457-3.694 0-1.757.92-2.618 1.246-2.969.337-.363.732-.451.976-.451h.66c.248 0 .579.038.881.566.364.64 1.137 2.22 1.235 2.382.099.163.163.363.025.578-.137.215-.248.347-.446.55-.198.2-.42.447-.604.598-.198.172-.297.283-.148.557.149.273.655 1.127 1.407 1.826 1.168 1.082 2.148 1.414 2.445 1.576.297.163.471.15.643-.038.173-.187.742-.842 1.015-1.14.272-.297.446-.246.768-.148.321.099 2.048.965 2.399 1.14.351.175.584.262.668.41.084.148.084.86-.253 1.695z"/>
                </svg>
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
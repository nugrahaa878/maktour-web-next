'use client'

import { FC } from 'react';
import { useFilter } from '@/context/FilterContext';

const PackageFilters: FC = () => {
  const { category, setCategory, currency, setCurrency } = useFilter();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 mb-8 px-4">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center bg-white rounded-full p-1 shadow-md max-w-full">
        <button
          onClick={() => setCategory('all')}
          className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all m-1 ${category === 'all' ? 'bg-primary text-[#DCB04B]' : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          All
        </button>
        <button
          onClick={() => setCategory('umrah')}
          className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all m-1 ${category === 'umrah' ? 'bg-primary text-[#DCB04B]' : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          Umrah
        </button>
        <button
          onClick={() => setCategory('hajj')}
          className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all m-1 ${category === 'hajj' ? 'bg-primary text-[#DCB04B]' : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          Hajj
        </button>
        <button
          onClick={() => setCategory('special')}
          className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all m-1 ${category === 'special' ? 'bg-primary text-[#DCB04B]' : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          Special Program
        </button>
      </div>

      {/* Currency Toggle */}
      <div className="flex items-center justify-center bg-white rounded-full p-1 shadow-md">
        <button
          onClick={() => setCurrency('USD')}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all ${currency === 'USD' ? 'bg-primary text-[#DCB04B]' : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          USD
        </button>
        <button
          onClick={() => setCurrency('IDR')}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all ${currency === 'IDR' ? 'bg-primary text-[#DCB04B]' : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          IDR
        </button>
      </div>
    </div>
  );
};

export default PackageFilters; 
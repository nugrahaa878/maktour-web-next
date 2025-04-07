'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import heroImage from '../../../public/assets/images/kabah.png';

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage?: StaticImageData | string;
}

const HeroSectionSearch: FC<HeroSectionProps> = ({ title, description, backgroundImage = heroImage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="flex items-center relative py-30">
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt="Hero Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative w-full container mx-auto md:px-4 flex flex-col justify-center items-center text-center z-10">
        <div className='px-8'>
          <h1 className="text-xl md:text-xl lg:text-5xl font-bold text-white mb-8 max-w-2xl abhaya-libre">
            {title}
          </h1>
          <p className="text-4xl text-white/90 mb-8 md:mb-6 mx-auto font-semibold tracking-wider">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto mb-8">
            <input
              type="text"
              placeholder="Search for packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-96 px-6 py-3 rounded-full bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              onClick={handleSearch}
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-8 rounded-full transition-all"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionSearch;
import { FC } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import heroImage from '../../../public/assets/images/kabah.png';

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage?: StaticImageData | string;
}

const HeroSection: FC<HeroSectionProps> = ({ title, description, buttonText, backgroundImage = heroImage }) => {
  return (
    <section className="flex items-center relative py-30">
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt="Hero Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative w-full container mx-auto md:px-4 flex flex-col justify-center items-center text-center z-10">
        <div className='px-8'>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl abhaya-libre">
            {title}
          </h1>
          <p className="text-sm text-white/90 mb-8 md:mb-12 max-w-xl mx-auto">
            {description}
          </p>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-8 rounded-full transition-all">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
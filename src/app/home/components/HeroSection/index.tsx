import { FC } from 'react';
import heroImage from '../../../../../public/assets/images/kabah.png';
import Image from 'next/image';
import { ExploreButton } from './ExploreButton';

const HeroSection: FC = () => {
  return (
    <section className="relative h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <Image src={heroImage} alt="Hero Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative h-full container mx-auto px-8 md:px-4 flex flex-col justify-center items-start z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl abhaya-libre">
          A Journey of Faith, <br />Guided with Excellence
        </h1>
        <p className="text-sm text-white/90 mb-8 md:mb-12 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lorem a ipsum placerat feugiat. Pellentesque vel turpis mi. Vestibulum facilisis sit amet tellus ac pharetra. Etiam ac urna eu massa blandit ornare. Integer
        </p>
        <ExploreButton />
      </div>
    </section>
  );
}

export default HeroSection;
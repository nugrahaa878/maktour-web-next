import { FC } from 'react';
import heroImage from '../../../../../public/assets/images/kabah.png';
import Image from 'next/image';
import { ExploreButton } from './ExploreButton';
import PreviewPackages from '../PreviewPackage';

const HeroSection: FC = () => {
  return (
    <section className="flex items-center relative pt-40 pb-10">
      <div className="absolute inset-0">
        <Image src={heroImage} alt="Hero Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative w-full container mx-auto md:px-4 flex flex-col justify-center items-start z-10">
        <div className='px-8'>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl abhaya-libre">
            A Journey of Faith, <br />Guided with Excellence
          </h1>
          <p className="text-sm text-white/90 mb-8 md:mb-12 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed lorem a ipsum placerat feugiat. Pellentesque vel turpis mi. Vestibulum facilisis sit amet tellus ac pharetra. Etiam ac urna eu massa blandit ornare. Integer
          </p>

          <ExploreButton />
        </div>

        <PreviewPackages />
      </div>
    </section>
  );
}

export default HeroSection;
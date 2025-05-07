import { FC } from 'react';
import { ExploreButton } from './ExploreButton';
import PreviewPackages from '../PreviewPackage';
import HeroCarousel from './HeroCarousel';

const HeroSection: FC = () => {
  return (
    <section className="flex items-center relative pt-36 md:pt-40 pb-10">
      <HeroCarousel />

      <div className="relative w-full container mx-auto md:px-4 flex flex-col justify-center items-center z-10 text-center">
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
        <div className='h-14'></div>
      </div>
      {/* Overlay for vertical blurred transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 via-white/50 to-transparent z-[5] pointer-events-none"></div>
    </section>
  );
}

export default HeroSection;
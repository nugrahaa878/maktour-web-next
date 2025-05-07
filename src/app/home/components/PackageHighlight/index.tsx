'use client'
import { FC } from 'react';
import PackageList from './PackageList';
import ExploreMoreButton from './ExploreMoreButton';
import { useLanguage } from '@/context/LanguageContext';

interface PackageFeature {
  icon: string;
  text: string;
}

interface Package {
  type: string;
  title: string;
  image: string;
  description: string;
  price: string;
  features: PackageFeature[];
}

const PackageHighlights: FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Our Special Package",
      description: "Choose from our carefully curated packages designed to provide you with the best spiritual journey experience"
    },
    id: {
      title: "Paket Spesial Kami",
      description: "Pilih dari paket-paket yang kami kurasi dengan hati-hati untuk memberikan Anda pengalaman perjalanan spiritual terbaik"
    }
  };

  // Get content based on current language
  const { title, description } = language === 'id' ? content.id : content.en;

  return (
    <section className="relative py-16">
      <div className="container md:mx-auto md:px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 abhaya-libre">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <PackageList />
        <ExploreMoreButton />

      </div>
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-t from-white/5 via-white/90 to-transparent z-[5] pointer-events-none"></div>
    </section>
  );
};

export default PackageHighlights;
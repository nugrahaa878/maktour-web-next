import { FC } from 'react';
import PackageList from './PackageList';
import ExploreMoreButton from './ExploreMoreButton';

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
  return (
    <section className="py-16">
      <div className="container md:mx-auto md:px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 abhaya-libre">
            Our Special Package
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated packages designed to provide you with the best spiritual journey experience
          </p>
        </div>

        <PackageList />
        <ExploreMoreButton />

      </div>
    </section>
  );
};

export default PackageHighlights;
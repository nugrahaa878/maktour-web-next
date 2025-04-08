import { FC } from 'react';
import Image from 'next/image';
import BookingButton from './BookingButton';
import Chip from '@/components/Chip';

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

const packages: Package[] = [
  {
    type: 'Economy',
    title: 'Premium Hajj Package',
    image: '/assets/images/mekah-1.jpg',
    description: 'Experience the ultimate Hajj journey with premium accommodations and dedicated services',
    price: 'USD 44.500 - 49.500 / Person',
    features: [
      { icon: '🏨', text: '5-star hotel accommodations' },
      { icon: '🍽️', text: 'Full-board meals' },
      { icon: '👤', text: 'Dedicated guide' }
    ]
  },
  {
    type: 'Business',
    title: 'Standard Umrah Package',
    image: '/assets/images/mekah-2.jpg',
    description: 'Complete your Umrah with our comprehensive and comfortable package',
    price: 'USD 44.500 - 49.500 / Person',
    features: [
      { icon: '🏨', text: '4-star hotel accommodations' },
      { icon: '✈️', text: 'Return flights included' },
      { icon: '🚌', text: 'Ground transportation' }
    ]
  },
  {
    type: 'Economy',
    title: 'Family Umrah Package',
    image: '/assets/images/mekah-3.jpg',
    description: 'Special package designed for families with children-friendly accommodations',
    price: 'USD 44.500 - 49.500 / Person',
    features: [
      { icon: '👨‍👩‍👧‍👦', text: 'Family rooms available' },
      { icon: '🍽️', text: 'Special meal options' },
      { icon: '📱', text: '24/7 support service' }
    ]
  }
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-7">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative h-[500px] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <Chip label={pkg.type} className='w-fit mb-2 -ml-1' variant='primary' />
                <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-white/90 mb-4">{pkg.description}</p>
                <div className="space-y-2 mb-6">
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-md text-white">{pkg.price}</span>
                  <BookingButton />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#FFC100] text-[#232323] px-8 py-3 rounded-2xl font-medium transition-all duration-200 cursor-pointer hover:bg-[#FFD54F] hover:scale-105 hover:shadow-lg">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackageHighlights;
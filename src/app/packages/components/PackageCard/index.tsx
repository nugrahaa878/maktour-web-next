import { FC } from 'react';
import Image from 'next/image';
import Chip from '@/components/Chip';
import SeeDetailButton from '../SeeDetailsButton';

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
}

const packages: Package[] = [
  {
    type: 'Premium',
    title: 'VIP Hajj Package',
    image: '/assets/images/mekah-1.jpg',
    description: 'Exclusive VIP Hajj experience with luxury accommodations and personalized service',
    price: 'USD 55.000 - 60.000 / Person'
  },
  {
    type: 'Business',
    title: 'Premium Umrah Package',
    image: '/assets/images/mekah-2.jpg',
    description: 'Premium Umrah journey with superior accommodations and services',
    price: 'USD 48.500 - 52.500 / Person'
  },
  {
    type: 'Economy',
    title: 'Standard Hajj Package',
    image: '/assets/images/mekah-3.jpg',
    description: 'Complete Hajj package with comfortable accommodations and full services',
    price: 'USD 42.500 - 46.500 / Person'
  },
  {
    type: 'Premium',
    title: 'Luxury Umrah Plus',
    image: '/assets/images/mekah-1.jpg',
    description: 'Luxury Umrah package with extended stay and additional holy site visits',
    price: 'USD 52.000 - 57.000 / Person'
  },
  {
    type: 'Business',
    title: 'Comfort Hajj Package',
    image: '/assets/images/mekah-2.jpg',
    description: 'Comfortable Hajj journey with quality services and accommodations',
    price: 'USD 45.500 - 49.500 / Person'
  },
  {
    type: 'Economy',
    title: 'Basic Umrah Package',
    image: '/assets/images/mekah-3.jpg',
    description: 'Affordable Umrah package with all essential services included',
    price: 'USD 38.500 - 42.500 / Person'
  }
];

const PackageCard: FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="flex items-center justify-between">
                  <span className="text-md text-white">{pkg.price}</span>
                  <SeeDetailButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default PackageCard;
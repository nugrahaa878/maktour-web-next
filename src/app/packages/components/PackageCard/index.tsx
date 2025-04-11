'use client'

import { FC } from 'react';
import Image from 'next/image';
import Chip from '@/components/Chip';
import SeeDetailButton from '../SeeDetailsButton';
import { useGetPackage } from '@/hooks/useGetPackage';
import bgImage from '../../../../../public/assets/images/mekah-1.jpg';
import { formatRupiah } from '@/lib/currencyFormatter';

interface Package {
  type: string;
  title: string;
  image: string;
  description: string;
  price: string;
}

const PackageCard: FC = () => {
  const { data, isLoading } = useGetPackage();
  const packageList = data?.data ?? []

  if (isLoading) {
    return (
      <div className="flex flex-col items-center py-10">
        <p className="text-xl">Loading List Package...</p>
      </div>
    );
  }

  if (!packageList.length) {
    return (
      <div className="flex flex-col items-center py-10">
        <p className="text-2xl font-semibold mb-5">Package Not Found</p>
        <p className="text-gray-600">The requested FAQ category could not be found or has no questions.</p>
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packageList.map((pkg, index) => (
            <div
              key={index}
              className="relative h-[500px] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <Image
                src={bgImage}
                alt={pkg.name}
                fill
                className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <Chip label={pkg.classification} className='w-fit mb-2 -ml-1' variant='primary' />
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-md text-white">{formatRupiah(pkg.priceInIdr)} / person</span>
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

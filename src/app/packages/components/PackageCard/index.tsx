'use client'

import { FC } from 'react';
import Image from 'next/image';
import Chip from '@/components/Chip';
import SeeDetailButton from '../SeeDetailsButton';
import { useGetPackage } from '@/hooks/useGetPackage';
import bgImage from '../../../../../public/assets/images/mekah-1.jpg';
import { formatDollar, formatRupiah } from '@/lib/currencyFormatter';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

interface Package {
  type: string;
  title: string;
  image: string;
  description: string;
  price: string;
}

const PackageCard: FC = () => {
  const { language } = useLanguage();
  const { data, isLoading } = useGetPackage();
  const packageList = data?.data.filter((pkg) => pkg.locale === language) ?? [];
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!packageList.length) {
    return (
      <div className="flex flex-col items-center py-10">
        <p className="text-2xl font-semibold mb-5">Package Not Found</p>
        <p className="text-gray-600">There are no Package right now</p>
      </div>
    );
  }

  const handleClick = (id: string) => {
    router.push(`/packages/${id}`)
  }

  return (
    <section className="py-16 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold abhaya-libre text-center md:text-left mb-10">Our Packages</h1>
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packageList.map((pkg, index) => (
            <div
              key={index}
              className="relative h-[500px] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              onClick={() => handleClick(pkg.documentId)}
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
                  <span className="text-md text-white">{language === 'en' ? formatDollar(pkg.priceInUsd) : formatRupiah(pkg.priceInIdr)} / person</span>
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

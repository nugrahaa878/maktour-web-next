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
import { useFilter } from '@/context/FilterContext';
import PackageFilters from '../PackageFilters';
import { PackageItem } from '@/types/package';

const PackageCard: FC = () => {
  const { language } = useLanguage();
  const { category, currency } = useFilter();
  const { data, isLoading } = useGetPackage();
  const packageList = data?.data.filter((pkg) => pkg.locale === language) ?? [];
  const router = useRouter();

  // Filter packages by category
  const filteredPackages = packageList.filter(pkg => {
    if (category === 'all') return true;
    const categoryMapping = {
      'umrah': 'umrah',
      'hajj': 'hajj',
      'special': 'special program'
    };
    return pkg.category.toLowerCase() === categoryMapping[category];
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[40vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!filteredPackages.length) {
    return (
      <div className="flex flex-col items-center py-8">
        <PackageFilters />
        <p className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-5 text-center px-4">Package Not Found</p>
        <p className="text-gray-600 text-center px-4">There are no packages matching the selected filters</p>
      </div>
    );
  }

  const handleClick = (id: string) => {
    router.push(`/packages/${id}`)
  }

  // Format price based on selected currency
  const formatPrice = (pkg: PackageItem) => {
    if (currency === 'USD') {
      return formatDollar(pkg.priceInUsd);
    } else {
      return formatRupiah(pkg.priceInIdr);
    }
  };

  return (
    <section className="py-6 sm:py-8 flex flex-col items-center">
      <PackageFilters />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredPackages.map((pkg, index) => (
            <div
              key={index}
              className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              onClick={() => handleClick(pkg.documentId)}
            >
              <Image
                src={bgImage}
                alt={pkg.name}
                fill
                className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                <Chip label={pkg.classification} className='w-fit mb-2 -ml-1' variant='primary' />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-md text-white">{formatPrice(pkg)} / person</span>
                  <SeeDetailButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageCard;

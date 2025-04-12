'use client'

import { useLanguage } from "@/context/LanguageContext";
import { useGetPackage } from "@/hooks/useGetPackage"
import Image from "next/image";
import bgCard from '../../../../../public/assets/images/mekah-3.jpg';
import Chip from "@/components/Chip";
import BookingButton from "./BookingButton";
import { formatDollar, formatRupiah } from "@/lib/currencyFormatter";

const PackageList = () => {
  const { language } = useLanguage();
  const { data } = useGetPackage();

  const listPackage = data?.data.filter((pkg) => pkg.locale === language) ?? [];

  if (!listPackage?.length) {
    return <div className="flex flex-col items-center py-10">
      <p className="text-2xl font-semibold mb-5">Package Not Found</p>
      <p className="text-gray-600">There are no Package right now</p>
    </div>
  }

  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-7 md:px-0">
    {listPackage.map((pkg, index) => (
      <div
        key={index}
        className="relative h-[500px] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
      >
        <Image
          src={bgCard}
          alt={pkg.name}
          fill
          className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <Chip label={pkg.classification} className='w-fit mb-2 -ml-1' variant='primary' />
          <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>

          <div className="space-y-2 mb-6">
          </div>
          <div className="flex items-center justify-between">
            <span className="text-md text-white">{language === 'en' ? formatDollar(pkg.priceInUsd) : formatRupiah(pkg.priceInIdr)}</span>
            <BookingButton id={pkg.documentId} />
          </div>
        </div>
      </div>
    ))}
  </div>

}

export default PackageList;

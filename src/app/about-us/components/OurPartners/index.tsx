'use client';

import { FC } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import saudiImage from '../../../../../public/assets/images/partners/saudia-airlines-seeklogo.png';
import emiratesImage from '../../../../../public/assets/images/partners/fly-emirates-seeklogo.png';
import qatarImage from '../../../../../public/assets/images/partners/qatar-airways.png';
import garudaImage from '../../../../../public/assets/images/partners/garuda-indonesia-seeklogo.png';
import etihadImage from '../../../../../public/assets/images/partners/etihad.png';

interface Partner {
  name: string;
  logo: StaticImageData;
  description: string;
}

const partners: Partner[] = [
  {
    name: 'Saudi Airlines',
    logo: saudiImage,
    description: 'Official carrier of Saudi Arabia with premium services for Hajj and Umrah pilgrims'
  },
  {
    name: 'Emirates',
    logo: emiratesImage,
    description: 'Award-winning airline providing exceptional comfort for pilgrims'
  },
  {
    name: 'Qatar Airways',
    logo: qatarImage,
    description: 'Five-star airline offering specialized services for Hajj and Umrah travellers'
  },
  {
    name: 'Garuda Indonesia',
    logo: garudaImage,
    description: 'Indonesia\'s flag carrier with dedicated Hajj and Umrah flight programs'
  },
  {
    name: 'Etihad Airways',
    logo: etihadImage,
    description: 'Premium carrier with special amenities for pilgrimage journeys'
  },
];

const OurPartners: FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4 abhaya-libre">
          Our Airline Partners
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We collaborate with the world's most reliable airlines to ensure your journey to the holy lands is comfortable, safe, and memorable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="h-24 w-full flex items-center justify-center mb-4 relative">
                <div className="w-48 h-20 relative">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-center">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners; 
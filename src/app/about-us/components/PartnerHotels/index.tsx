'use client';

import { FC } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import interconImage from '../../../../../public/assets/images/partners/intercontinental.svg';
import hiltonImage from '../../../../../public/assets/images/partners/hilton.png';

interface Hotel {
  name: string;
  logo: StaticImageData;
  description: string;
  features: string[];
  location: string;
}

const hotels: Hotel[] = [
  {
    name: 'InterContinental',
    logo: interconImage,
    description: 'Luxury accommodations steps away from the holy sites with exclusive amenities for pilgrims.',
    features: ['5-star luxury', 'Premium dining', 'Prayer facilities', 'Pilgrim concierge'],
    location: 'Makkah & Madinah'
  },
  {
    name: 'Hilton Hotels',
    logo: hiltonImage,
    description: 'World-class hotel experience with specially designed services for Hajj and Umrah visitors.',
    features: ['Premium suites', 'Halal cuisine', 'Multilingual staff', 'Sacred site views'],
    location: 'Makkah & Madinah'
  }
];

const PartnerHotels: FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4 abhaya-libre">
          Our Exclusive Hotel Partners
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-6">
          We've secured privileged partnerships with the finest hotels in the holy cities, offering our clients accommodations that most travel agencies simply cannot access.
        </p>
        <p className="text-center text-gray-800 font-semibold max-w-3xl mx-auto mb-12">
          Our exclusive allocation of rooms ensures your stay will be comfortable, convenient, and truly memorable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-24 w-full flex items-center justify-center p-6 bg-white">
                <div className="h-16 w-56 relative">
                  <Image
                    src={hotel.logo}
                    alt={`${hotel.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-6 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">{hotel.name}</h3>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    {hotel.location}
                  </span>
                </div>

                <p className="text-gray-700 mb-4">{hotel.description}</p>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">EXCLUSIVE AMENITIES</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {hotel.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-amber-50">
                <p className="text-center text-amber-800 font-medium">
                  Limited rooms available - Book early to secure your stay
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerHotels; 
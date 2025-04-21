'use client';

import { useState } from 'react';
import Image from 'next/image';
import whatsappIcon from '../../public/assets/icons/whatsapp.png';
import { useGetCustomerService } from '../hooks/useGetCustomerService';

const WhatsAppFAB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { customerServices, loading, error } = useGetCustomerService();

  const handleCSSelect = (phoneNumber: string) => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-xs md:w-md bg-white rounded-lg shadow-lg overflow-hidden mb-4">
          <div className="bg-[#25D366] text-white p-4">
            <h3 className="text-2xl font-semibold mb-2">Halo</h3>
            <p className="text-sm">
              Klik salah satu perwakilan kami di bawah ini untuk berbicara via WhatsApp
            </p>
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-500 mb-4">The team typically replies in a few minutes.</p>

            {loading ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
                <p className="text-sm text-gray-600 mt-2">Loading customer services...</p>
              </div>
            ) : error ? (
              <div className="text-center py-4">
                <p className="text-sm text-red-600">Error loading customer services</p>
              </div>
            ) : (
              <div className="space-y-4">
                {customerServices.map((cs) => (
                  <div
                    key={cs.id}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group border-l-4 border-transparent hover:border-[#25D366]"
                    onClick={() => handleCSSelect(cs.phoneNumber)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={cs.photo.photo.url}
                          alt={cs.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-gray-800">{cs.name}</p>
                        <p className="text-sm text-gray-500">{cs.title || 'Sales'}</p>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Image
                        src={whatsappIcon}
                        alt="WhatsApp"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#FFC100] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <Image
          src={whatsappIcon}
          alt="WhatsApp"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </button>
    </div>
  );
};

export default WhatsAppFAB; 
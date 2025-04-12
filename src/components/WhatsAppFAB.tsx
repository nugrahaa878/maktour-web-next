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
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white rounded-lg shadow-lg p-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Our CS</h3>
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
            <div className="space-y-3">
              {customerServices.map((cs) => (
                <div
                  key={cs.id}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                  onClick={() => handleCSSelect(cs.phoneNumber)}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={cs.photo.photo.url}
                      alt={cs.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{cs.name}</p>
                    <p className="text-xs text-gray-500">{cs.phoneNumber}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl"
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
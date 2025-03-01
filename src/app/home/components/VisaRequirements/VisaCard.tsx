'use client';

import { FC, useState } from 'react';
import { IconType } from 'react-icons';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface VisaCardProps {
  visa: {
    title: string;
    requirements: string[];
    processingTime: string;
    fees: string;
  };
  index: number;
}

const VisaCard: FC<VisaCardProps> = ({ visa, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{visa.title}</h3>

        <div className="space-y-4 w-full">
          <div className="md:block">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between text-left md:hidden mb-2"
            >
              <h4 className="font-medium text-emerald-600">Requirements</h4>
              {isExpanded ? (
                <FaChevronUp className="text-emerald-600" />
              ) : (
                <FaChevronDown className="text-emerald-600" />
              )}
            </button>
            <div className={`md:block ${isExpanded ? 'block' : 'hidden'}`}>
              <ul className="text-gray-600 text-left space-y-2 mb-4">
                {visa.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
              <div className="text-left">
                <p className="text-gray-600">
                  <span className="font-medium text-emerald-600">Processing Time:</span>{' '}
                  {visa.processingTime}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-emerald-600">Fees:</span> {visa.fees}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
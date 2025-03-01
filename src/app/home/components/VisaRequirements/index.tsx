import { FC } from 'react';
import { visaTypes } from './visaData';
import VisaCard from './VisaCard';

const VisaRequirements: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visa Requirements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about visa requirements for your journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visaTypes.map((visa, index) => (
            <VisaCard key={index} visa={visa} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaRequirements;
import { FC } from 'react';
import { FaKaaba, FaPlane, FaHotel, FaUserTie } from 'react-icons/fa';

const services = [
  {
    icon: FaKaaba,
    title: 'Hajj & Umrah Packages',
    description: 'Comprehensive spiritual journey packages with expert guidance and support throughout your pilgrimage.'
  },
  {
    icon: FaPlane,
    title: 'Travel Arrangements',
    description: 'Seamless travel planning including flights, transfers, and visa processing services.'
  },
  {
    icon: FaHotel,
    title: 'Premium Accommodations',
    description: 'Carefully selected hotels and accommodations close to holy sites for your comfort.'
  },
  {
    icon: FaUserTie,
    title: 'Expert Guidance',
    description: 'Experienced guides and scholars to assist you throughout your spiritual journey.'
  }
];

const ServicesOverview: FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to make your spiritual journey memorable and meaningful
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden w-full overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
          <div className="flex space-x-4 w-max">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-none w-72 bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
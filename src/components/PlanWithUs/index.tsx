'use client';

import { FC } from 'react';
import Link from 'next/link';

const PlanWithUs: FC = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#1D3D2D] to-[#4BA076] rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between p-8 md:px-20 md:py-12">
            <div className="mb-6 md:mb-0 md:mr-8 max-w-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                Lorem ipsum odor amet, consectetuer adipiscing elit?
              </h2>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-block bg-[#FFC100] text-[#232323] px-8 py-2 md:px-10 md:py-3 rounded-full font-medium text-lg transition-all duration-200 hover:bg-[#FFD54F] hover:scale-105 hover:shadow-lg"
              >
                Plan with Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanWithUs;
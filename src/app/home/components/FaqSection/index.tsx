'use client';

import { FC, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useGetFaq } from '@/hooks/useGetFaq';
import { useLanguage } from '@/context/LanguageContext';

const FaqSection: FC = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { data, isLoading, error } = useGetFaq();

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = data?.data.filter((faq) => faq.locale === language) || [];

  return (
    <section className="w-full py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-8 px-5">
          <div className="mb-8 md:mb-0 md:flex-1">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 abhaya-libre">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-md text-gray-600 max-w-2xl md:pr-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra velit tempus felis placerat dignissim. Aenean tristique justo id dignissim malesuada. Etiam massa elit, scelerisque in eleifend sed, dictum vitae nisl. Suspendisse facilisis ante at dolor fringilla, id ultrices nisl tempor. Duis luctus eu sapien quis tincidunt. Done
            </p>
          </div>

          <div className="md:flex-1">
            {error && <p className="text-red-500">Failed to load FAQs. Please try again later.</p>}
            {faqs.map((faq, index) => (
              <div key={index} className={`mb-3 md:mb-4 rounded-xl md:rounded-2xl border-b px-3 md:px-4 border-gray-200 pb-3 md:pb-4 ${activeIndex === index ? 'bg-gradient-to-r from-white to-[#FFF0BF]' : ''}`}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left py-3 md:py-4 focus:outline-none"
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-base md:text-xl font-semibold text-gray-900 pr-2">{faq.question}</h3>
                  {activeIndex === index ? (
                    <FaChevronUp className="flex-shrink-0 text-gray-500" />
                  ) : (
                    <FaChevronDown className="flex-shrink-0 text-gray-500" />
                  )}
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-sm md:text-base text-gray-600 pb-2 md:pb-4">{faq.answer}</p>
                </div>
              </div>
            ))}
            {/* TODO: Implemnt loading state */}
            {isLoading && <p className="text-gray-500">Loading FAQs...</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
'use client'

import Loader from "@/components/Loader";
import { useLanguage } from "@/context/LanguageContext";
import { useGetFaq } from "@/hooks/useGetFaq";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Props {
  faqId: number;
}

const FaqContent = ({ faqId }: Props) => {
  const { language } = useLanguage();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const { getFaqFilteredById, isLoading, error } = useGetFaq();
  const faqs = getFaqFilteredById(faqId);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filterLanguageFaq = faqs?.filter((faq) => faq.locale === language) ?? [];

  if (isLoading) {
    return <Loader />
  }

  if (!faqs.length) {
    return (
      <div className="flex flex-col items-center py-10">
        <p className="text-2xl font-semibold mb-5">FAQ Not Found</p>
        <p className="text-gray-600">The requested FAQ category could not be found or has no questions.</p>

        <button className="border rounded-lg mt-4 px-4 py-2 hover:bg-[#FFC100] hover:text-white hover:border-none cursor-pointer" onClick={() => router.back()}>Back to Category</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-10">
      <p className="text-2xl font-semibold md:mb-5 mb-10">{faqs[0]?.faqCategory?.name}</p>
      <div className="flex flex-col m-auto w-full md:w-2xl px-10 md:px-0">
        {filterLanguageFaq.map((faq, index) => (
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
      </div>
    </div>
  )
}

export default FaqContent;
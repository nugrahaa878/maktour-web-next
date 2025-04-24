'use client';

import { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useGetUmrahInfo } from '@/hooks/useGetUmrahInfo';
import { UmrahInfoContent } from '@/types/umrah';
import { FaBookOpen } from 'react-icons/fa';
import Loader from '@/components/Loader';

const UmrahContent: FC = () => {
  const { data, isLoading, error } = useGetUmrahInfo();
  const [selectedContent, setSelectedContent] = useState<number>(1);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set initial selected content when data loads
  useEffect(() => {
    if (data && data.data && data.data[0]?.content?.length > 0) {
      setSelectedContent(data.data[0].content[0].id);
    }
  }, [data]);

  const handleContentSelect = (contentId: number) => {
    setSelectedContent(contentId);
  };

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="text-red-500">Error loading Umrah information</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-lg h-fit top-24 md:hidden">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 abhaya-libre">Umrah Guide</h2>
          <div className="space-y-4">
            {data?.data[0]?.content.map(content => (
              <button
                key={content.id}
                onClick={() => handleContentSelect(content.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${selectedContent === content.id ? 'bg-[#FFC100] text-[#232323]' : 'hover:bg-gray-50'}`}
              >
                <div className="flex items-center">
                  <FaBookOpen className={`mr-3 ${selectedContent === content.id ? 'text-[#232323]' : 'text-gray-500'}`} />
                  <h3 className="font-medium">{content.header}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Left section - Content Cards */}
        <div className="w-full md:w-2/3 space-y-8">
          {data?.data[0]?.content
            .filter(content => content.id === selectedContent)
            .map((content, index) => (
              <div
                key={content.id}
                ref={(el: HTMLDivElement | null) => { contentRefs.current[index] = el }}
                data-content-id={content.id}
                className="p-6 rounded-xl bg-white shadow-lg"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {content.imagePosition === 'top' && (
                    <div className="w-full md:w-1/3 h-48 relative rounded-lg overflow-hidden bg-gray-200">
                      <Image
                        src={content.media.file.formats.large.url}
                        alt={content.media.alternativeText}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 abhaya-libre">{content.header}</h3>
                    <div className="prose max-w-none">
                      {content.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  {content.imagePosition === 'bottom' && (
                    <div className="w-full md:w-1/3 h-48 relative rounded-lg overflow-hidden bg-gray-200">
                      <Image
                        src={content.media.file.formats.large.url}
                        alt={content.media.alternativeText}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Right section - Content Menu */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-lg h-fit sticky top-24 hidden md:block">
          <div className="space-y-4">
            {data?.data[0]?.content.map(content => (
              <button
                key={content.id}
                onClick={() => handleContentSelect(content.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${selectedContent === content.id ? 'bg-[#FFC100] text-[#232323]' : 'hover:bg-gray-50'}`}
              >
                <div className="flex items-center">
                  <FaBookOpen className={`mr-3 ${selectedContent === content.id ? 'text-[#232323]' : 'text-gray-500'}`} />
                  <h3 className="font-medium">{content.header}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmrahContent;
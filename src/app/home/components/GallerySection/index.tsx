'use client'

import { useGetGallery } from '@/hooks/useGetGallery';
import { DesktopGallery } from './DesktopGallery';
import { MobileGallery } from './MobileGallery';
import { useLanguage } from '@/context/LanguageContext';
import Loader from '@/components/Loader';

const GallerySection = () => {
  const { data, isLoading, error } = useGetGallery();
  const { language } = useLanguage(); // Use the custom hook

  // Text content based on language
  const content = {
    en: {
      title: "Captured Blessings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      loading: "Loading...",
      error: "Failed to load gallery."
    },
    id: {
      title: "Berkah yang Terabadikan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      loading: "Memuat...",
      error: "Gagal memuat galeri."
    }
  };

  // Get content based on current language
  const { title, description, loading, error: errorText } = language === 'id' ? content.id : content.en;

  // Transform API data to the required format for the gallery components
  const transformedImages = data?.data.map(item => ({
    id: item.id,
    src: item.media.file.url,
    title: item.media.title || '',
    description: item.media.description || '',
  })) || [];

  const images = transformedImages;

  if (isLoading) {
    return (
      <section className="py-10 md:py-16">
        <Loader />
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-10 md:py-16">
        <div className="container mx-auto text-center">
          <p>{errorText}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-[#001D0F] abhaya-libre">
          {title}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto px-6">
          {description}
        </p>

        <DesktopGallery images={images} />
        <MobileGallery images={images} />
      </div>
    </section>
  );
};

export default GallerySection;
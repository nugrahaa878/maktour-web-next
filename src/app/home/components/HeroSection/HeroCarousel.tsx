'use client'

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { useGetHeroImage } from '@/hooks/useGetHeroImage';

const HeroCarousel: FC = () => {
  const { data, isLoading, error } = useGetHeroImage();
  const heroImages = data?.data[0]?.images || [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages]);

  if (isLoading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error || !data || heroImages.length === 0) {
    return (
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-black/50 z-[2]"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={image.id}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 1 : 0,
          }}
        >
          <Image
            src={image.photo.formats.large?.url || image.photo.url}
            alt={image.alternativeText || `Hero Background ${index + 1}`}
            className="w-full h-full object-cover"
            priority={index === 0}
            fill
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50 z-[2]"></div>
    </div>
  );
};

export default HeroCarousel; 
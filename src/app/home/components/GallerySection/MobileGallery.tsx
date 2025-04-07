'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { GalleryImage } from './types';

interface MobileGalleryProps {
  images: GalleryImage[];
}

export const MobileGallery = ({ images }: MobileGalleryProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="md:hidden w-full overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
      <div ref={scrollRef} className="flex space-x-4 w-max">
        {images.map((image) => (
          <div
            key={image.id}
            className="flex-none w-72 relative overflow-hidden rounded-lg h-48 group"
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 288px"
                className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 ease-in-out">
              <h3 className="text-white font-semibold text-lg transform transition-transform duration-300 ease-in-out">{image.title}</h3>
              <p className="text-white/80 text-sm transform transition-transform duration-300 ease-in-out">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
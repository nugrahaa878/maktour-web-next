'use client'

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import heroImage from '../../../../../public/assets/images/kabah.png';
import heroImage1 from '../../../../../public/assets/images/hero-1.jpg';
import heroImage2 from '../../../../../public/assets/images/hero-2.jpg';

const HeroCarousel: FC = () => {
  const heroImages = [heroImage, heroImage1, heroImage2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 1 : 0,
          }}
        >
          <Image
            src={image}
            alt={`Hero Background ${index + 1}`}
            className="w-full h-full object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50 z-[2]"></div>
    </div>
  );
};

export default HeroCarousel; 
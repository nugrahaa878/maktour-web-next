import Image from 'next/image';
import { GalleryImage } from './types';

interface DesktopGalleryProps {
  images: GalleryImage[];
}

export const DesktopGallery = ({ images }: DesktopGalleryProps) => {
  if (images.length === 0) {
    return null;
  }

  // Get the first two images for the top row
  const topRowImages = images.slice(0, 2);
  // Get the remaining images for the scrollable row
  const scrollableImages = images.slice(2);

  return (
    <div className="hidden md:flex flex-col gap-4">
      {/* Top row with two large images */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-5 relative group overflow-hidden rounded-lg h-[400px]">
          <div className="relative w-full h-full">
            <Image
              src={topRowImages[0].src}
              alt={topRowImages[0].title}
              fill
              sizes="(min-width: 768px) 41vw"
              className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-4">
            <h3 className="text-white font-semibold text-lg">{topRowImages[0].title}</h3>
            <p className="text-white/80 text-sm">{topRowImages[0].description}</p>
          </div>
        </div>

        <div className="col-span-7 relative group overflow-hidden rounded-lg h-[400px]">
          <div className="relative w-full h-full">
            <Image
              src={topRowImages[1].src}
              alt={topRowImages[1].title}
              fill
              sizes="(min-width: 768px) 58vw"
              className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-4">
            <h3 className="text-white font-semibold text-lg">{topRowImages[1].title}</h3>
            <p className="text-white/80 text-sm">{topRowImages[1].description}</p>
          </div>
        </div>
      </div>

      {/* Scrollable row */}
      <div className="relative">
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {scrollableImages.map((image, index) => (
            <div
              key={index}
              className="relative group flex-none w-[300px] h-[200px] overflow-hidden rounded-lg"
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="300px"
                  className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
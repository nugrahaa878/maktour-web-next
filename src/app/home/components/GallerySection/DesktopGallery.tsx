import Image from 'next/image';
import { GalleryImage } from './types';

interface DesktopGalleryProps {
  images: GalleryImage[];
}

export const DesktopGallery = ({ images }: DesktopGalleryProps) => {
  return (
    <div className="hidden md:grid grid-cols-12 gap-4 auto-rows-[200px]">
      {/* First row */}
      <div className="col-span-3 row-span-1 relative group overflow-hidden rounded-lg">
        <div className="relative w-full h-full">
          <Image
            src={images[0].src}
            alt={images[0].title}
            fill
            sizes="(min-width: 768px) 25vw"
            className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-4">
          <h3 className="text-white font-semibold text-lg">{images[0].title}</h3>
          <p className="text-white/80 text-sm">{images[0].description}</p>
        </div>
      </div>

      <div className="col-span-5 row-span-2 relative group overflow-hidden rounded-lg">
        <div className="relative w-full h-full">
          <Image
            src={images[1].src}
            alt={images[1].title}
            fill
            sizes="(min-width: 768px) 41vw"
            className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-4">
          <h3 className="text-white font-semibold text-lg">{images[1].title}</h3>
          <p className="text-white/80 text-sm">{images[1].description}</p>
        </div>
      </div>

      <div className="col-span-4 row-span-2 relative group overflow-hidden rounded-lg">
        <div className="relative w-full h-full">
          <Image
            src={images[2].src}
            alt={images[2].title}
            fill
            sizes="(min-width: 768px) 33vw"
            className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-4">
          <h3 className="text-white font-semibold text-lg">{images[2].title}</h3>
          <p className="text-white/80 text-sm">{images[2].description}</p>
        </div>
      </div>

      {/* Second row */}
      <div className="col-span-3 row-span-1 relative group overflow-hidden rounded-lg">
        <div className="relative w-full h-full">
          <Image
            src={images[3].src}
            alt={images[3].title}
            fill
            sizes="(min-width: 768px) 25vw"
            className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-4">
          <h3 className="text-white font-semibold text-lg">{images[3].title}</h3>
          <p className="text-white/80 text-sm">{images[3].description}</p>
        </div>
      </div>

      {/* Third row */}
      <div className="col-span-6 row-span-1 relative group overflow-hidden rounded-lg">
        <div className="relative w-full h-full">
          <Image
            src={images[4].src}
            alt={images[4].title}
            fill
            sizes="(min-width: 768px) 50vw"
            className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-4">
          <h3 className="text-white font-semibold text-lg">{images[4].title}</h3>
          <p className="text-white/80 text-sm">{images[4].description}</p>
        </div>
      </div>

      <div className="col-span-6 row-span-1 relative group overflow-hidden rounded-lg">
        <div className="relative w-full h-full">
          <Image
            src={images[5].src}
            alt={images[5].title}
            fill
            sizes="(min-width: 768px) 50vw"
            className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-4">
          <h3 className="text-white font-semibold text-lg">{images[5].title}</h3>
          <p className="text-white/80 text-sm">{images[5].description}</p>
        </div>
      </div>
    </div>
  );
};
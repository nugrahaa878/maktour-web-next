import Image from 'next/image';
import { GalleryImage } from './types';

interface DesktopGalleryProps {
  images: GalleryImage[];
}

export const DesktopGallery = ({ images }: DesktopGalleryProps) => {
  console.log('999 ini images', images);
  return (
    <div className="hidden md:grid grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative group overflow-hidden rounded-lg h-64">
          <div className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.title}
              fill
              sizes="(min-width: 768px) 33vw"
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
  );
};
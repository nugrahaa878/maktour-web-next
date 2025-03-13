import { galleryImages } from './data';
import { DesktopGallery } from './DesktopGallery';
import { MobileGallery } from './MobileGallery';

const GallerySection = () => {
  const images = galleryImages;

  return (
    <section className=" py-10 md:py-16  bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-[#001D0F] abhaya-libre">
          Captured Blessings
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <DesktopGallery images={images} />
        <MobileGallery images={images} />
      </div>
    </section>
  );
};

export default GallerySection;
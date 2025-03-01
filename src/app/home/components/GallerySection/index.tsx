import { galleryImages } from './data';
import { DesktopGallery } from './DesktopGallery';
import { MobileGallery } from './MobileGallery';

const GallerySection = () => {
  const images = galleryImages;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-emerald-800">
          Gallery of Previous Trips
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore the memorable moments from our previous Hajj and Umrah journeys, where faith and community come together in the holy lands.
        </p>

        <DesktopGallery images={images} />
        <MobileGallery images={images} />
      </div>
    </section>
  );
};

export default GallerySection;
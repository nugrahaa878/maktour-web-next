import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface PreviewItemProps {
  icon: StaticImageData;
  alt: string;
  description: string;
}

const PreviewItem: FC<PreviewItemProps> = ({ icon, alt, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-24 w-24 relative mb-4">
        <Image src={icon} alt={alt} fill className="object-contain" />
      </div>
      <p className="text-md px-10 text-center">{description}</p>
    </div>
  );
};

export default PreviewItem;
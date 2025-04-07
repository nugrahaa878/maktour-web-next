import { StaticImageData } from "next/image";

export interface GalleryImage {
  id: number;
  src: StaticImageData | string;
  title: string;
  description: string;
}
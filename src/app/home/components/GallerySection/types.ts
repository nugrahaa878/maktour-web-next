import { StaticImageData } from "next/image";

export interface GalleryImage {
  id: number;
  src: StaticImageData;
  title: string;
  description: string;
}
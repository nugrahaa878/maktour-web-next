export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface GalleryFile {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: {
    large: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface GalleryMedia {
  id: number;
  title: string;
  description: null | string;
  alternativeText: string;
  file: GalleryFile;
}

export interface GalleryItem {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  media: GalleryMedia;
}

export interface GalleryResponse {
  data: GalleryItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
} 
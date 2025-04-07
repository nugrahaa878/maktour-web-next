export interface BlogImage {
  id: number;
  title: string;
  description: string;
  alternativeText: string;
  file: {
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
  };
}

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

export interface ContentBlock {
  type: string;
  level?: number;
  children: {
    text: string;
    type: string;
  }[];
}

export interface BlogItem {
  id: number;
  documentId: string;
  title: string;
  content: ContentBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  coverImage: BlogImage;
}

export interface BlogResponse {
  data: BlogItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
} 
export interface BlogImage {
  id: number;
  title: string;
  description: string;
  alternativeText: string;
  file: {
    id: number;
    url: string;
    formats: {
      large: ImageFormat;
      medium: ImageFormat;
      small: ImageFormat;
      thumbnail: ImageFormat;
    };
  };
}

export interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface ContentBlock {
  type: string;
  level?: number;
  format?: string;
  children: Array<{
    text: string;
    type: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
  }>;
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

export interface BlogDetailResponse {
  data: {
    id: number;
    documentId: string;
    title: string;
    content: ContentBlock[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    coverImage: BlogImage;
  };
  meta: Record<string, any>;
} 
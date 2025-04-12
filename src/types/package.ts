export interface ContentNode {
  type: string;
  children: {
    text: string;
    type: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
  }[];
  format?: string;
  level?: number;
}

export interface DetailSection {
  id: number;
  header: string;
  content: ContentNode[];
  imagePosition: string;
  media: {
    id: number;
    title: string;
    description: string;
    alternativeText: string;
    file: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
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
      previewUrl: string | null;
      provider: string;
      provider_metadata: any | null;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface PackageItem {
  id: number;
  documentId: string;
  name: string;
  category: string;
  classification: string;
  priceInUsd: number;
  durationInDay: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  requirementDetail: DetailSection;
  accommodationDetail: DetailSection;
  cancellationPolicy: DetailSection;
  additionalInfos: DetailSection[];
  priceInIdr: number;
}

export interface PackageListResponse {
  data: PackageItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface PackageDetailResponse {
  data: PackageItem;
  meta: Record<string, unknown>;
} 
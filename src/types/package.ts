export interface ContentNode {
  type: string;
  children: {
    text: string;
    type: string;
  }[];
}

export interface DetailSection {
  id: number;
  header: string;
  content: ContentNode[];
  imagePosition: string;
  media: any | null;
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
  cancellationPolicy: any | null;
  additionalInfos: any[];
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
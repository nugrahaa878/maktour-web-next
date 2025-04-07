export interface FaqCategory {
  id: number;
  documentId: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface FaqItem {
  id: number;
  documentId: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  faqCategory: FaqCategory | null;
}

export interface FaqResponse {
  data: FaqItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
} 
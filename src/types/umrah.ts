export interface UmrahInfoMedia {
  id: number;
  title: string;
  description: string | null;
  alternativeText: string;
  file: {
    id: number;
    name: string;
    url: string;
    formats: {
      large: {
        url: string;
        width: number;
        height: number;
      };
      small: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      thumbnail: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

export interface UmrahInfoContent {
  id: number;
  header: string;
  content: string;
  imagePosition: string;
  media: UmrahInfoMedia;
}

export interface UmrahInfoResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    content: UmrahInfoContent[];
  }[];
  meta: Record<string, unknown>;
} 
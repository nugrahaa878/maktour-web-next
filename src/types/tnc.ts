export interface TextNode {
  bold?: boolean;
  text: string;
  type: 'text';
}

export interface ContentNode {
  type: 'heading' | 'paragraph' | 'list';
  level?: number;
  format?: 'unordered';
  children: (TextNode | { type: 'list-item', children: TextNode[] })[];
}

export interface TncItem {
  id: number;
  documentId: string;
  title: string;
  content: ContentNode[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface TncResponse {
  data: TncItem[];
  meta: Record<string, unknown>;
}
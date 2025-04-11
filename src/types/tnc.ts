export interface TextNode {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  text: string;
  type: 'text';
}

export interface ContentNode {
  type: 'heading' | 'paragraph' | 'list';
  level?: number;
  format?: 'ordered' | 'unordered';
  children: (TextNode | { type: 'list-item', children: TextNode[] })[];
}

export interface TncContent {
  id: number;
  header: string;
  content: ContentNode[];
}

export interface TncItem {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  tnc: TncContent[];
}

export interface TncResponse {
  data: TncItem[];
  meta: Record<string, unknown>;
}
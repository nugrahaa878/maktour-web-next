export interface PolicyText {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export interface PolicyHeading {
  type: 'heading';
  level: number;
  children: PolicyText[];
}

export interface PolicyParagraph {
  type: 'paragraph';
  children: PolicyText[];
}

export interface PolicyListItem {
  type: 'list-item';
  children: PolicyText[];
}

export interface PolicyList {
  type: 'list';
  format: 'ordered' | 'unordered';
  children: PolicyListItem[];
}

export type PolicyContent = PolicyHeading | PolicyParagraph | PolicyList;

export interface PolicySection {
  id: number;
  header: string;
  content: PolicyContent[];
}

export interface PolicyDocument {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  policy: PolicySection[];
}

export interface PolicyResponse {
  data: PolicyDocument[];
  meta: Record<string, unknown>;
}

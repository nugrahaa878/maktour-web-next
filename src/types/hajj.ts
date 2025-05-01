export interface HajjInfoMedia {
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

export interface HajjContent {
  id: number;
  title: string;
  content: ContentBlock[];
  coverImage: HajjInfoMedia;
}

export interface HajjSubmenu {
  id: number;
  title: string;
  contents: HajjContent[];
}

export interface HajjMenu {
  id: number;
  title: string;
  icon: string;
  submenus: HajjSubmenu[];
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

export interface HajjInfoResponse {
  data: HajjMenu[];
  meta: Record<string, unknown>;
} 
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

export interface UmrahContent {
  id: number;
  title: string;
  content: ContentBlock[];
  coverImage: UmrahInfoMedia;
}

export interface UmrahSubmenu {
  id: number;
  title: string;
  contents: UmrahContent[];
}

export interface UmrahMenu {
  id: number;
  title: string;
  icon: string;
  submenus: UmrahSubmenu[];
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

export interface UmrahInfoResponse {
  data: UmrahMenu[];
  meta: Record<string, unknown>;
} 
import type { BlogPost } from '../../i18n/types';

export type BlogBlock =
  | { type: 'h2' | 'h3' | 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'cta'; title: string; text: string; href: string; buttonLabel?: string };

export interface BlogPostFull extends BlogPost {
  featured?: boolean;
  author?: string;
  /** Overrides document title when set (inherits BlogPost.seoTitle). */
  seoTitle?: string;
  body: BlogBlock[];
}

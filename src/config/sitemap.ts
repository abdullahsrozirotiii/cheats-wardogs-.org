import type { SitemapItem } from '@astrojs/sitemap';
import { blogPosts } from '../data/blog';
import { forumPosts } from '../data/forum';
import { parseBlogDate } from '../utils/schema';

const buildDate = new Date().toISOString();

const blogLastmod = new Map(
  blogPosts.map((post) => [`/blog/${post.slug}/`, parseBlogDate(post.date)] as const),
);

/** Forum is static guide Q&A; use newest post date instead of rebuild time for every URL. */
const forumLastmod = forumPosts.reduce((latest, post) => {
  const fromGuide = post.sourcePath ? blogLastmod.get(post.sourcePath) : undefined;
  const candidate = fromGuide ?? buildDate;
  return candidate > latest ? candidate : latest;
}, buildDate);

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (path.includes('/404') || path.startsWith('/go/') || path.includes('/rss.xml')) {
    return undefined;
  }

  if (path === '/') {
    item.lastmod = buildDate;
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/blog/') {
    item.lastmod = buildDate;
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/forum/') {
    item.lastmod = forumLastmod;
    item.priority = 0.8;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.startsWith('/forum/')) {
    const slug = path.replace(/^\/forum\/|\/$/g, '');
    const post = forumPosts.find((p) => p.slug === slug);
    const fromGuide = post?.sourcePath ? blogLastmod.get(post.sourcePath) : undefined;
    item.lastmod = fromGuide ?? forumLastmod;
    item.priority = 0.6;
    item.changefreq = 'monthly';
    return item;
  }

  if (path.startsWith('/blog/')) {
    item.priority = 0.7;
    item.changefreq = 'monthly';
    item.lastmod = blogLastmod.get(path) ?? buildDate;
    return item;
  }

  if (path.startsWith('/products/')) {
    item.lastmod = buildDate;
    item.priority = 0.8;
    item.changefreq = 'weekly';
    return item;
  }

  if (
    path === '/about/' ||
    path === '/support/' ||
    path === '/privacy/' ||
    path === '/terms/' ||
    path === '/faq/'
  ) {
    item.lastmod = buildDate;
    item.priority = 0.5;
    item.changefreq = 'yearly';
    return item;
  }

  item.lastmod = buildDate;
  item.priority = 0.6;
  item.changefreq = 'monthly';
  return item;
}

import { getCollection } from 'astro:content';

export function slugOf(id: string) {
  return id.replace(/\.md$/, '');
}

export function fmtDate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export async function getSortedPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getSortedMoments() {
  const moments = await getCollection('moments');
  return moments.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 博客文章
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    summary: z.string().default(''),
    category: z.string().default('未分类'),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  }),
});

// 碎碎念（说说）
const moments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/moments' }),
  schema: z.object({
    date: z.coerce.date(),
    mood: z.string().default(''),
  }),
});

// 独立页面（关于等）
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    comments: z.boolean().default(true),
    order: z.number().default(0),
  }),
});

export const collections = { posts, moments, pages };

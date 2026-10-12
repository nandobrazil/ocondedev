import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '*/index.md' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tagline: z.string().max(120),
      category: z.enum(['product', 'lab', 'infra', 'library', 'personal']),
      status: z.enum(['live', 'preview', 'frozen', 'archived', 'private']),
      period: z.string(),
      role: z.string(),
      host: z.string().optional(),
      stack: z.array(z.string()),
      links: z.object({
        site: z.string().url().optional(),
        docs: z.string().url().optional(),
        status: z.string().url().optional(),
        repo: z.string().url().optional(),
        package: z.string().url().optional(),
        store: z.string().url().optional(),
      }),
      cover: image(),
      mobile: image().optional(),
      gallery: z.array(z.object({ src: image(), caption: z.string() })).default([]),
      featured: z.number().int().optional(),
      order: z.number().int(),
      ogTitle: z.string().optional(),
    }),
});

export const collections = { projects };

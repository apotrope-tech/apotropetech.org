import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const progress = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/progress' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['design', 'simulation', 'bench']),
  }),
});

export const collections = { progress };

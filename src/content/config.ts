import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Simon Haenel'),
    tags: z.array(z.string()).default([]),
    focusKeyword: z.string().optional(),
    metaDescription: z.string().optional(),
    draft: z.boolean().default(false),
  })
});

export const collections = { blog };

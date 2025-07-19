import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Simon Haenel"),
    tags: z.array(z.string()).default([]),
    focusKeyword: z.string().optional(),
    metaDescription: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    focusKeyword: z.string().optional(),
    metaDescription: z.string().optional(),
    draft: z.boolean().default(false),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog, pages };

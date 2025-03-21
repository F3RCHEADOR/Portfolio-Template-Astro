import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const project = defineCollection({
	loader: glob({ base: './src/content/project', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		description: z.string(),
		utils: z.array(z.string()),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		deployed: z.boolean().optional(),
		url: z.string().optional(),
		urlGithub: z.string().optional(),
	})
})

export const collections = { project };

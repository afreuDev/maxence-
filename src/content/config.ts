import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const resultsCollection = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: 'src/content/results' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    distance: z.string(),
    rank: z.number(),
    time: z.string(),
    swim: z.string().optional(),
    bike: z.string().optional(),
    run: z.string().optional(),
    source: z.array(z.string().url()).optional(),
    tags: z.array(z.string()).optional(),
    team: z.string().optional(),
  }),
});

const pressCollection = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: 'src/content/press' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    excerpt: z.string().optional(),
    url: z.string().url(),
    sourceName: z.string(),
  }),
});

const athleteCollection = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: 'src/content/athlete' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    team: z.array(z.string()).optional(),
    clubs: z.array(z.string()).optional(),
    socials: z.object({
      instagram: z.string().url(),
      email: z.string().email(),
    }),
    cover: z.string(),
    naissance: z.string().optional(),
    residence: z.string().optional(),
    entraineur: z.string().optional(),
    hobbies: z.array(z.string()).optional(),
    taille: z.string().optional(),
    poids: z.string().optional(),
    pointure: z.number().optional(),
    envergure: z.string().optional(),
    largeur_epaules: z.string().optional(),
    masse_graisseuse: z.string().optional(),
    volume_cardiaque: z.string().optional(),
    pouls_repos_max: z.string().optional(),
  }),
});

export const collections = {
  post: postCollection,
  results: resultsCollection,
  press: pressCollection,
  athlete: athleteCollection,
};

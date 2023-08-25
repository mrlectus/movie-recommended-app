import { z } from "zod";

export const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
export const BASE64_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcpCJYDwADXwFI8RQ5jgAAAABJRU5ErkJggg==";

export const movieBodySchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const moviesSchema = z
  .object({
    page: z.number(),
    results: z.array(movieBodySchema),
    total_pages: z.number(),
    total_results: z.number(),
  })
  .transform((data) => {
    return {
      ...data,
      results: data.results.map((movie) => {
        return {
          ...movie,
          like: false,
        };
      }),
    };
  });

export type MovieBody = z.infer<typeof movieBodySchema>;
export type Movies = z.infer<typeof moviesSchema>;

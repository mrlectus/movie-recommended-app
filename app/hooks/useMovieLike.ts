import { useEffect, useMemo, useState } from "react";
import { Movies } from "../types/types";

export const useMovieLike = (initialMovies: Movies) => {
  const [movies, setMovies] = useState<Movies>(initialMovies);
  useEffect(() => {
    setMovies(initialMovies);
  }, [initialMovies]);

  const toggleLike = useMemo(
    () => (id: number) => {
      setMovies((prev) => {
        return {
          ...prev,
          results: prev?.results.map((movie) => {
            if (movie?.id === id) {
              return {
                ...movie,
                like: !movie?.like,
              };
            }
            return movie;
          }),
        };
      });
    },
    []
  );

  return [movies, toggleLike] as const;
};

import { getPopularMovies } from "@/app/services/api";
import { Movies } from "@/app/types/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetPopularMovies = () => {
  const [page, setNextPage] = useState<number>(1);
  return [
    useQuery<Movies>({
      queryKey: ["popular-movie", page],
      queryFn: () => getPopularMovies(page),
      suspense: true,
    }),
    page,
    setNextPage,
  ] as const;
};

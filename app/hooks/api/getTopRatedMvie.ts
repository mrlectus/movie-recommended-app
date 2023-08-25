import { getTopRatedMovies } from "@/app/services/api";
import { Movies } from "@/app/types/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetTopRatedMovie = () => {
  const [page, setNextPage] = useState<number>(1);
  return [
    useQuery<Movies>({
      queryKey: ["top-rated", page],
      queryFn: () => getTopRatedMovies(page),
    }),
    page,
    setNextPage,
  ] as const;
};

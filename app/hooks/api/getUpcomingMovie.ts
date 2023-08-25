import { getNewMovies } from "@/app/services/api";
import { Movies } from "@/app/types/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetUpcomingMovies = () => {
  const [page, setNextPage] = useState<number>(1);
  return [
    useQuery<Movies>({
      queryKey: ["new-movie", page],
      queryFn: () => getNewMovies(page),
    }),
    page,
    setNextPage,
  ] as const;
};

import { getWatchingNow } from "@/app/services/api";
import { Movies } from "@/app/types/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetWatchingNow = () => {
  const [page, setNextPage] = useState<number>(1);
  return [
    useQuery<Movies>({
      queryKey: ["now-watching", page],
      queryFn: () => getWatchingNow(page),
    }),
    page,
    setNextPage,
  ] as const;
};

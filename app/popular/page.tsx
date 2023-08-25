"use client";
import Image from "next/image";
import { BASE64_IMAGE, IMAGE_URL } from "@/app/types/types";
import { Fragment, Suspense } from "react";
import { useMovieLike } from "@/app/hooks/useMovieLike";
import { Like } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import Loader from "../loading";
import { useGetPopularMovies } from "../hooks/api/getPopularMovies";

const Popular = () => {
  const [{ data }, page, setNextPage] = useGetPopularMovies();
  const [movies, toggleLike] = useMovieLike(data!);
  return (
    <section className="px-4 w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-xl">Popular Movies</h2>
      </div>
      <div className="grid grid-cols-5 gap-5">
        <Suspense fallback={<Loader />}>
          {movies?.results?.map((movie) => {
            return (
              <Fragment key={movie.id}>
                <div className="rounded-md text-white relative flex flex-col">
                  <Like
                    toggleLike={() => toggleLike(movie.id)}
                    id={movie.id}
                    liked={movie.like}
                  />
                  <Image
                    src={IMAGE_URL + movie.poster_path}
                    alt={movie.title}
                    width={300}
                    height={300}
                    placeholder="blur"
                    blurDataURL={BASE64_IMAGE}
                    className="rounded-md border-4 border-white cursor-pointer"
                  />
                  <caption className="text-sm font-bold flex gap-1">
                    <span className="text-green-600">
                      [{movie.original_language}]
                    </span>
                    {movie.title}
                  </caption>
                  <p className="text-sm absolute p-2 bg-black m-1 rounded-md">
                    {movie.release_date.slice(0, 4)}
                  </p>
                </div>
              </Fragment>
            );
          })}
        </Suspense>
      </div>
      <div className="flex justify-center gap-10 px-4 my-4 w-full borde">
        {page !== 1 && (
          <Button
            className="font-bold"
            onClick={() => setNextPage((prev) => prev - 1)}
          >
            prev
          </Button>
        )}
        <Button
          className="font-bold"
          disabled={data?.total_pages === page}
          onClick={() => {
            setNextPage((prev) => prev + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default Popular;

"use client";
import Link from "next/link";
import { ArrowRight, Like } from "./icons/icons";
import Image from "next/image";
import { BASE64_IMAGE, IMAGE_URL } from "@/app/types/types";
import { Fragment } from "react";
import { useMovieLike } from "@/app/hooks/useMovieLike";
import { useGetUpcomingMovies } from "@/app/hooks/api/getUpcomingMovie";

const NewMovieSection = () => {
  const [{ data }] = useGetUpcomingMovies();
  const [movies, toggleLike] = useMovieLike(data!);
  return (
    <section className="px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-xl">Upcoming Movies</h2>
        <div className="flex">
          <Link href="/upcoming" className="text-sm text-gray-600">
            See all
          </Link>
          <ArrowRight />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {movies?.results?.slice(0, 5).map((movie) => {
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
      </div>
    </section>
  );
};

export default NewMovieSection;

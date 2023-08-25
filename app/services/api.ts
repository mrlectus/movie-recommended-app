import { instance } from "@/lib/utils";
import { Movies, moviesSchema } from "../types/types";

export const getPopularMovies = async (page: number): Promise<Movies> => {
  try {
    const { data } = await instance.get(`/movie/popular?page=${page}`);
    return moviesSchema.parse(data);
  } catch (error) {
    throw error;
  }
};

export const getWatchingNow = async (page: number): Promise<Movies> => {
  try {
    const { data } = await instance.get(`/movie/now_playing?page=${page}`);
    return moviesSchema.parse(data);
  } catch (error) {
    throw error;
  }
};

export const getNewMovies = async (page: number): Promise<Movies> => {
  try {
    const { data } = await instance.get(`/movie/upcoming?page=${page}`);
    return moviesSchema.parse(data);
  } catch (error) {
    throw error;
  }
};

export const getTopRatedMovies = async (page: number): Promise<Movies> => {
  try {
    const { data } = await instance.get(`/movie/top_rated?page=${page}`);
    return moviesSchema.parse(data);
  } catch (error) {
    throw error;
  }
};

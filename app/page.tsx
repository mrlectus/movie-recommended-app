import NewMovieSection from "@/components/newmovies";
import PopularMovieSection from "@/components/popular.movie";
import TopMovieSection from "@/components/topmovies";
import WatchingNow from "@/components/watching.now";

export default function Home() {
  return (
    <main className="flex flex-col flex-grow gap-5">
      <WatchingNow />
      <PopularMovieSection />
      <NewMovieSection />
      <TopMovieSection />
    </main>
  );
}

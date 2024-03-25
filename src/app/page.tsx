import { InputWithButton } from "@/components/InputWithButton";
import "@/styles/home.css";
import { CarouselSize } from "@/components/CarouselSize";
import FrequentQuestion from "@/components/FrequentQuestion";
import { getTrendingMovies } from "@/lib/utils";

export default async function Home() {
  const trendingMovies = await getTrendingMovies();

  return (
    <main className="flex min-h-screen flex-col items-center space-y-16">
      <div className="w-3/5 home-banner py-44 rounded-b-lg">
        <div className="w-full px-16">
          <h1 className="text-white text-6xl">Welcome.</h1>
          <h2 className="text-white text-xl">
            Watch and rate all of your favourite movies and TV shows here!
          </h2>
          <InputWithButton
            placeholder="Search anything here..."
            body="Search"
          />
        </div>
      </div>
      <section className="w-3/5">
        <h1 className="text-2xl font-bold text-start">Trending Movies</h1>
        <CarouselSize contentList={trendingMovies} />
      </section>
      {/* <section className="w-3/5">
        <h1 className="text-2xl font-bold text-start">Recomendations</h1>
        <CarouselSize />
      </section> */}
      <section className="w-3/5 pb-8">
        <FrequentQuestion />
      </section>
    </main>
  );
}

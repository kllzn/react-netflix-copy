import { FC, useEffect, useState } from "react";
import Hero from "../components/HomePage/Hero";
import { connectFavorites, getMovies } from "../utils/api";
import { Movie } from "../typings";
import Row from "../components/HomePage/Row";

interface HomeProps {}

interface Movies {
  popularMovies: Movie[];
  trendingMovies: Movie[];
  topRatedMovies: Movie[];
  popularComedies: Movie[];
  popularTVShows: Movie[];
}

const Home: FC<HomeProps> = () => {
  const [movies, setMovies] = useState<Movies | null>(null);
  const [favorite, setFavorite] = useState<Array<number> | null>(null);
  useEffect(() => {
    getMovies().then((res) => {
      setMovies(res.props);
    });
    connectFavorites().then((res) => setFavorite(res));
  }, []);
  const rows = {
    "Trending Now": movies?.trendingMovies,
    "Top Rated Movies": movies?.topRatedMovies,
    "Popular Comedies": movies?.popularComedies,
    "Popular TV Shows": movies?.popularTVShows
  };
  return (
    <main>
      <Hero popularMovies={movies?.popularMovies}></Hero>
      <div className=" -mt-[150px] md:-mt-[205.5px] space-y-8 ">
        {Object.entries(rows).map(([title, movie]) => {
          return (
            <Row
              movies={movie}
              title={title}
              key={title}
              favorites={favorite}></Row>
          );
        })}
      </div>
    </main>
  );
};

export default Home;

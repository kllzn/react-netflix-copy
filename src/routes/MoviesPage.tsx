import { useEffect, useState } from "react";
import { connectFavorites, getMovies } from "../utils/api";
import Wrapper from "../components/Wrapper";
import { Movies } from "../typings";
import Row from "../components/HomePage/Row";

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movies | null>(null);
  const [favorite, setFavorite] = useState<Array<number> | null>(null);
  useEffect(() => {
    getMovies().then((res) => setMovies(res.props));
    connectFavorites().then((res) => setFavorite(res));
  }, []);
  const rows = {
    "Trending Now": movies?.trendingMovies,
    "Top Rated Movies": movies?.topRatedMovies,
    "Popular Comedies": movies?.popularComedies,
    "Popular TV Shows": movies?.popularTVShows
  };
  return (
    <Wrapper>
      <div className="space-y-8">
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
    </Wrapper>
  );
};

export default MoviesPage;

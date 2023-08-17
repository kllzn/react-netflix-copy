import { FC, useEffect, useState } from "react";
import { connectFavorites, getSeries } from "../utils/api";
import { Movie } from "../typings";
import Wrapper from "../components/Wrapper";
import Row from "../components/HomePage/Row";

interface SeriesProps {}

interface Movies {
  comedies: Movie[];
  dramas: Movie[];
  animation: Movie[];
  crime: Movie[];
  family: Movie[];
}

const Series: FC<SeriesProps> = () => {
  const [movies, setMovies] = useState<Movies | null>(null);
  const [favorite, setFavorite] = useState<Array<number> | null>(null);
  useEffect(() => {
    getSeries().then((res) => setMovies(res.props));
    connectFavorites().then((res) => setFavorite(res));
  }, []);

  const rows = {
    "Popular Comedy Shows!": movies?.comedies,
    "Movies that makes you cry": movies?.dramas,
    "Animation Shows, that you might like": movies?.animation,
    "Crimes!": movies?.crime,
    "You definitely should watch it with your family!": movies?.family
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

export default Series;

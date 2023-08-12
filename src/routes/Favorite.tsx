import { FC, useEffect, useState } from "react";
import { Movie } from "../typings";
import { getFavoriteTVShows, getFavoritesMovies } from "../utils/api";
import Row from "../components/HomePage/Row";

interface FavoriteProps {}

const Favorite: FC<FavoriteProps> = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [TVShows, setTVShows] = useState<Movie[] | null>(null);
  useEffect(() => {
    getFavoritesMovies().then((res) => setMovies(res));
    getFavoriteTVShows().then((res) => setTVShows(res));
  }, []);

  const rows = {
    "Favorite Movies": movies,
    "Favorite TV Shows": TVShows
  };

  return (
    <div className="space-y-8">
      {Object.entries(rows).map(([title, item]) => {
        return (
          <Row movies={item} title={title} favorites={true} key={title}></Row>
        );
      })}
    </div>
  );
};

export default Favorite;

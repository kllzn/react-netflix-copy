import { FC, useRef } from "react";
import { Movie } from "../../typings";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Wrapper from "../Wrapper";
import Thumbnail from "./Thumbnail";
// import { getFavoriteTVShows, getFavoritesMovies } from "../../utils/api";

interface RowProps {
  movies?: Movie[] | null;
  title: string;
  favorites: Array<number> | null | boolean;
}

const Row: FC<RowProps> = ({ movies, title, favorites }) => {
  // const [favoriteMovies, setFavoriteMovies] = useState<Array<number>>([]);
  const rowRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: string) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <Wrapper>
      <h2 className=" text-3xl font-medium mb-3">{title}</h2>
      <div className="group relative md:-ml-2 ">
        {movies?.length === 0 ? (
          <h2 className="text-center">You have no {title}.</h2>
        ) : (
          <>
            <AiOutlineLeft
              className={`text-[2em] md:text-[3em] absolute left-2 z-10 top-0 bottom-0 m-auto cursor-pointer opacity-0 transition text-white group-hover:opacity-100 hover:scale-125`}
              onClick={() => handleClick("left")}></AiOutlineLeft>

            <div
              className="flex gap-x-2 overflow-x-scroll overflow-y-hidden scrollbar-none h-[100px] md:h-[160px]"
              ref={rowRef}>
              {movies?.map((movie) => (
                <Thumbnail
                  movie={movie}
                  key={movie.id}
                  inFavorite={
                    favorites && typeof favorites !== "boolean"
                      ? favorites.includes(movie.id)
                      : Boolean(favorites)
                  }></Thumbnail>
              ))}
            </div>

            <AiOutlineRight
              className={`text-[2em] md:text-[3em] absolute right-2 z-10 top-0 bottom-0 m-auto cursor-pointer opacity-0 transition text-white group-hover:opacity-100 hover:scale-125`}
              onClick={() => handleClick("right")}></AiOutlineRight>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Row;

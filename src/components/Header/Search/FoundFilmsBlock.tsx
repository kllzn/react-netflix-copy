import { FC } from "react";
import { Movie } from "../../../typings";
import FoundFilmThumbnail from "./FoundFilmThumbnail";

interface FoundFilmsBlockProps {
  movies?: Movie[];
}

const FoundFilmsBlock: FC<FoundFilmsBlockProps> = ({ movies }) => {
  return (
    <div className="absolute z-[100] top-[27px] pt-3 right-0 w-[281px] bg-[#5B5B5B] h-[300px] overflow-auto scrollbar-thin scrollbar-track-[#444444] scrollbar-thumb-[#222222] ">
      <div>
        {movies &&
          movies.map((movie) => {
            return <FoundFilmThumbnail movie={movie} key={movie.id} />;
          })}
      </div>
    </div>
  );
};

export default FoundFilmsBlock;

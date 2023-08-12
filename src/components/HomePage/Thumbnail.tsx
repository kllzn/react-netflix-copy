import { FC, useEffect, useState } from "react";
import { Movie } from "../../typings";
import getBackdropUrl from "../../utils/getBackdropURL";
import { BiPlay, BiPlus, BiCheck } from "react-icons/bi";
import { postMovie } from "../../utils/api";

interface ThumbnailProps {
  movie: Movie;
  inFavorite: boolean;
}

const Thumbnail: FC<ThumbnailProps> = ({ movie, inFavorite }) => {
  const [isAddedToList, setIsAddedToList] = useState(false);

  const addToListHandler = () => {
    if (isAddedToList) {
      setIsAddedToList(false);
      postMovie({
        media_type: movie.media_type,
        media_id: movie.id,
        listName: "favorite",
        addOrDelete: false
      });
    } else {
      setIsAddedToList(true);
      postMovie({
        media_type: movie.media_type,
        media_id: movie.id,
        listName: "favorite",
        addOrDelete: true
      });
    }
  };

  useEffect(() => {
    inFavorite && setIsAddedToList(true);
  }, [inFavorite]);

  return (
    <div className=" group/item relative min-w-[180px] max-w-[200px] cursor-pointer transition duration-200 ease-out  md:min-w-[280px] md:max-w-[300px] md:hover:scale-105">
      <img
        src={getBackdropUrl(movie.backdrop_path)}
        alt=""
        className="object-cover"
      />
      <div className="absolute top-0 left-0 h-full w-full hidden group-hover/item:flex  justify-center items-center bg-main-black bg-opacity-60 p-1 md:p-4">
        <div className=" flex flex-col h-18 md:h-24 w-full items-center justify-between">
          <h5 className="text-xs md:text-base text-center font-bold">
            {movie.title || movie.name}
          </h5>
          <div className="flex gap-x-2 mt-2">
            <button className=" min-h-[10px] md:min-h-[20px] bg-white bg-opacity-80 text-black text-xs md:text-base font-medium px-1 md:px-2 rounded flex justify-center items-center gap-x-1">
              <BiPlay size="2em"></BiPlay>
              Play
            </button>
            <button
              key={movie.id}
              className=" min-h-[10px] md:min-h-[20px] bg-main-gray text-white text-[0.5rem] md:text-base font-medium px-1 md:px-2 rounded flex justify-center items-center gap-x-1"
              onClick={() => {
                addToListHandler();
              }}>
              {isAddedToList ? (
                <BiCheck size="2em"></BiCheck>
              ) : (
                <BiPlus size="2em"></BiPlus>
              )}
              Add to list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;

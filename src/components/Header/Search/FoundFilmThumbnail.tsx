import { FC, useEffect, useState } from "react";
import { Movie } from "../../../typings";
import getBackdropUrl from "../../../utils/getBackdropURL";
import Modal from "../../Modal";

interface FoundFilmThumbnailProps {
  movie?: Movie;
}

const FoundFilmThumbnail: FC<FoundFilmThumbnailProps> = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (document) {
      document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    }
  }, [isModalOpen]);
  return (
    <>
      {isModalOpen && <Modal movie={movie} closeModal={setIsModalOpen}></Modal>}
      <div
        className="p-2 flex w-full justify-between items-center hover:bg-[#777777] transition-all ease-in-out duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}>
        <div className=" w-[64px] h-[36px]">
          {movie?.backdrop_path || movie?.poster_path ? (
            <img
              src={getBackdropUrl(movie?.backdrop_path || movie?.poster_path)}
              alt=""
              className="aspect-video max-w-full max-h-full"
            />
          ) : (
            <div className="w-full h-full bg-main-black"></div>
          )}
        </div>
        <div className="font-medium text-xs w-[70%]">
          {movie?.title || movie?.name}
        </div>
      </div>
    </>
  );
};

export default FoundFilmThumbnail;

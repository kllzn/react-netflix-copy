import { FC, useEffect, useState } from "react";
import { Movie } from "../typings";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { getMovieVideos, getTVShowVideos } from "../utils/api";
import ReactPlayer from "react-player/youtube";
import Rating from "./Rating";

interface ModalProps {
  movie?: Movie;
  closeModal: (isModalOpen: boolean) => void;
}

const Modal: FC<ModalProps> = ({ movie, closeModal }) => {
  const [video, setVideo] = useState<string | null>(null);

  useEffect(() => {
    if (movie?.media_type === "movie") {
      getMovieVideos(movie.id).then((res) =>
        setVideo(res[Math.floor(Math.random() * res.length)].key)
      );
    } else if (movie?.media_type === "tv") {
      getTVShowVideos(movie.id).then((res) =>
        setVideo(res[Math.floor(Math.random() * res.length)].key)
      );
    }
  }, [movie]);
  return (
    <div className="fixed z-[10000] top-0 left-0 bg-mid-gray w-full h-full flex justify-center items-center">
      <div className="w-[full] h-full md:w-[90vw] md:min-h-[90vh] bg-main-black p-[1.5em]">
        <button onClick={() => closeModal(false)}>
          <AiOutlineCloseCircle size="1.5em" />
        </button>
        <div className="w-full flex flex-col justify-center md:justify-stretch items-center h-full">
          <div className="w-full md:w-[640px] xl:w-[80%] h-[80%]">
            <div className="w-auto h-[320px] md:h-[90%] mx-auto my-0">
              {video ? (
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video}`}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              ) : (
                <p>Video not found</p>
              )}
            </div>
            <div className="flex flex-col-reverse gap-y-5  md:gap-y-0 items-center md:flex-row justify-between flex-auto mt-4">
              <Rating rating={movie?.vote_average}></Rating>
              <h2 className="text-2xl md:text-xl font-bold">
                {movie?.title || movie?.name || movie?.original_name}
              </h2>
            </div>
            <div className="mt-4">
              <p>{movie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

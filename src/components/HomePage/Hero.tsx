import { FC, useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import { Movie } from "../../typings";
import getBackdropUrl from "../../utils/getBackdropURL";

interface HeroProps {
  popularMovies?: Movie[];
}

const Hero: FC<HeroProps> = ({ popularMovies }) => {
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    setMovie(
      popularMovies &&
        popularMovies[Math.floor(Math.random() * popularMovies.length)]
    );
  }, [popularMovies]);

  return (
    <section className="hero h-[820px] relative flex items-end shadow-[inset_0px_-55px_74px_-26px_rgba(0,0,0,0.75);]">
      <div className="absolute w-full h-full -z-10 bg-black">
        <img
          src={getBackdropUrl(movie?.backdrop_path)}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />
      </div>
      <Wrapper className=" flex-auto h-4/5">
        <div className="max-w-[650px]">
          <div className="">
            <h1 className="text-6xl break-words leading-[0.8em] font-black">
              {movie?.title}
            </h1>
          </div>

          <div className="flex gap-x-4 mt-8">
            <button className="min-h-[55px] bg-white text-black font-medium text-2xl px-7 rounded flex justify-center items-center gap-x-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="Play">
                  <path
                    id="Vector"
                    d="M8 5.33334L28 16L8 26.6667V5.33334Z"
                    fill="#141414"
                  />
                </g>
              </svg>
              Play
            </button>
            <button className="min-h-[55px] bg-main-gray px-7 rounded font-medium text-2xl flex justify-center items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none">
                <path
                  d="M29.3334 16C29.3334 23.364 23.364 29.3333 16 29.3333C8.63602 29.3333 2.66669 23.364 2.66669 16C2.66669 8.636 8.63602 2.66666 16 2.66666C23.364 2.66666 29.3334 8.636 29.3334 16ZM26.6667 16C26.6667 13.171 25.5429 10.4579 23.5425 8.45753C21.5421 6.45714 18.829 5.33333 16 5.33333C13.171 5.33333 10.4579 6.45714 8.45755 8.45753C6.45716 10.4579 5.33335 13.171 5.33335 16C5.33335 18.829 6.45716 21.5421 8.45755 23.5425C10.4579 25.5429 13.171 26.6667 16 26.6667C18.829 26.6667 21.5421 25.5429 23.5425 23.5425C25.5429 21.5421 26.6667 18.829 26.6667 16ZM14.6667 24V14.6667H17.3334V24H14.6667ZM16 12.3333C15.7825 12.3355 15.5667 12.2936 15.3658 12.2102C15.1648 12.1268 14.9828 12.0036 14.8307 11.848C14.6701 11.6966 14.5428 11.5133 14.4572 11.3099C14.3715 11.1064 14.3294 10.8874 14.3334 10.6667C14.3334 10.2027 14.4974 9.808 14.8294 9.48533C15.1587 9.16266 15.5494 9 16 9C16.4494 9 16.84 9.16266 17.1694 9.48533C17.5 9.808 17.6667 10.2027 17.6667 10.6667C17.6667 11.1307 17.5014 11.5253 17.1694 11.848C17.0172 12.0036 16.8352 12.1268 16.6343 12.2102C16.4333 12.2936 16.2176 12.3355 16 12.3333Z"
                  fill="white"
                />
              </svg>
              More information
            </button>
          </div>
          <div className=" mt-8">
            <p className=" text-xl">{movie?.overview}</p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;

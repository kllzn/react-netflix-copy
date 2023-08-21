import { FC, useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { getBySearch } from "../../../utils/api";
import FoundFilmsBlock from "./FoundFilmsBlock";
import { Movie } from "../../../typings";

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  const [inputValue, setInputValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<Movie[] | undefined>(
    undefined
  );

  useEffect(() => {
    if (inputValue.length >= 3) {
      const searchRequest = inputValue.replace(/ /g, "%20");
      getBySearch(searchRequest).then((res) => setFoundMovies(res));
    }
  }, [inputValue]);

  return (
    <div className="relative flex h-8 w-8 group">
      <form
        action="/search"
        method="get"
        onBlur={(e) => {
          if (e.target.value.length >= 3) {
            e.target.focus();
          } else {
            setInputValue("");
          }
        }}>
        <input
          type="text"
          placeholder="Search for movies and series..."
          className="outline-none absolute w-0 h-full left-auto right-[31px] bg-[#5B5B5B] placeholder:text-smoke-white rounded-l-md border-none z-10 duration-[0.4s] group-focus-within:w-[250px] group-focus-within:px-2"
          id="searchInput"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}></input>
        <label
          htmlFor="searchInput"
          className="absolute w-8 h-8 flex items-center justify-center cursor-pointer group-focus-within:bg-[#5B5B5B] duration-[0.4s] group-focus-within:rounded-r-md ease-out">
          <HiSearch color="#ffffff" size="1.25em" className="" />
        </label>
      </form>
      {inputValue.length >= 3 && <FoundFilmsBlock movies={foundMovies} />}
    </div>
  );
};

export default Search;

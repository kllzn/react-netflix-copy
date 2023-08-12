import { Movie } from "../typings";
const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
  }
};

interface postProps {
  media_type: string;
  media_id: number;
  listName: string;
  addOrDelete: boolean;
}

export const postMovie = ({
  media_type,
  media_id,
  listName,
  addOrDelete
}: postProps) => {
  const postOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    },
    body: JSON.stringify({
      media_type: media_type,
      media_id: media_id,
      [listName]: addOrDelete
    })
  };

  fetch(
    `https://api.themoviedb.org/3/account/20249226/${listName}`,
    postOptions
  )
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const getMovies = async () => {
  const [
    popularMovies,
    trendingMovies,
    topRatedMovies,
    popularComedies,
    popularTVShows
  ] = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      getOptions
    ).then((res) => res.json()),
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      getOptions
    )
      .then((res) => res.json())
      .then((res) =>
        res.results.map((item: Movie) => {
          const movie = Object.assign({}, item);
          movie.media_type = "movie";
          return movie;
        })
      ),
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      getOptions
    )
      .then((res) => res.json())
      .then((res) =>
        res.results.map((item: Movie) => {
          const movie = Object.assign({}, item);
          movie.media_type = "movie";
          return movie;
        })
      ),
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35",
      getOptions
    )
      .then((res) => res.json())
      .then((res) =>
        res.results.map((item: Movie) => {
          const movie = Object.assign({}, item);
          movie.media_type = "movie";
          return movie;
        })
      ),
    fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      getOptions
    )
      .then((res) => res.json())
      .then((res) =>
        res.results.map((item: Movie) => {
          const movie = Object.assign({}, item);
          movie.media_type = "tv";
          return movie;
        })
      )
  ]);
  return {
    props: {
      popularMovies: popularMovies.results,
      trendingMovies: trendingMovies,
      topRatedMovies: topRatedMovies,
      popularComedies: popularComedies,
      popularTVShows: popularTVShows
    }
  };
};

export const getFavoritesMovies = async () => {
  const favoriteMovies = await fetch(
    "https://api.themoviedb.org/3/account/20249226/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
    getOptions
  )
    .then((response) => response.json())
    .then((res) =>
      res.results.map((item: Movie) => {
        const movie = Object.assign({}, item);
        movie.media_type = "movie";
        return movie;
      })
    );
  return favoriteMovies;
};

export const getFavoriteTVShows = async () => {
  const favoriteTVShows = await fetch(
    "https://api.themoviedb.org/3/account/20249226/favorite/tv?language=en-US&page=1&sort_by=created_at.asc",
    getOptions
  )
    .then((response) => response.json())
    .then((res) =>
      res.results.map((item: Movie) => {
        const movie = Object.assign({}, item);
        movie.media_type = "tv";
        return movie;
      })
    );
  return favoriteTVShows;
};

export const connectFavorites = async () => {
  const [favoriteMovies, favoriteTVShows] = await Promise.all([
    getFavoritesMovies().then((item) => item.map((item: Movie) => item.id)),
    getFavoriteTVShows().then((item) => item.map((item: Movie) => item.id))
  ]);
  return [...favoriteMovies, ...favoriteTVShows];
};

// SERIES

export const getSeries = async () => {
  const [comedies, dramas, animation, crime, family] = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35",
      getOptions
    )
      .then((res) => res.json())
      .then((res) =>
        res.results.map((item: Movie) => {
          const movie = Object.assign({}, item);
          movie.media_type = "tv";
          return movie;
        })
      ),
    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18",
      getOptions
    )
      .then((res) => res.json())
      .then((res) =>
        res.results.map((item: Movie) => {
          const movie = Object.assign({}, item);
          movie.media_type = "tv";
          return movie;
        })
      ),
    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16",
      getOptions
    )
      .then((res) => res.json())
      .then((res) =>
        res.results.map((item: Movie) => {
          const movie = Object.assign({}, item);
          movie.media_type = "tv";
          return movie;
        })
      ),
    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80",
      getOptions
    )
      .then((res) => res.json())
      .then((res) =>
        res.results.map((item: Movie) => {
          const movie = Object.assign({}, item);
          movie.media_type = "tv";
          return movie;
        })
      ),
    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10751",
      getOptions
    )
      .then((res) => res.json())
      .then((res) =>
        res.results.map((item: Movie) => {
          const movie = Object.assign({}, item);
          movie.media_type = "tv";
          return movie;
        })
      )
  ]);

  return {
    props: {
      comedies: comedies,
      dramas: dramas,
      animation: animation,
      crime: crime,
      family: family
    }
  };
};

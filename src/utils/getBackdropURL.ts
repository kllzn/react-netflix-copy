const getBackdropUrl = (path: string | undefined) => {
  return `https://image.tmdb.org/t/p/original${path}`;
};

export default getBackdropUrl;

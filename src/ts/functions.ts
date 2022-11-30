import { IMovie } from "./models/Movie";

export const movieSort = (movies: IMovie[], desc: boolean = true) => {
  return movies.sort((a: IMovie, b: IMovie) => {
    //If desc = true så ska sortera på ett sätt
    if (desc) {
      if (a.Title > b.Title) return 1;
      if (a.Title < b.Title) return -1;

      return 0;
    } else {
      if (a.Title > b.Title) return -1;
      if (a.Title < b.Title) return 1;

      return 0;
    }
  });
};

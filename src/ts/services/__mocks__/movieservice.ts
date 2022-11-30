import { IMovie } from "../../models/Movie";

let mockData: IMovie[] = [
  {
    Title: "Movie 1",
    Year: "1994",
    imdbID: "1234",
    Poster: "posterURL",
    Type: "Action",
  },
  {
    Title: "Movie 2",
    Year: "1996",
    imdbID: "1234",
    Poster: "posterURL",
    Type: "comedy",
  },
];

export async function getMovies(): Promise<IMovie[]> {
  return new Promise((resolve) => {
    resolve(mockData);
  });
}

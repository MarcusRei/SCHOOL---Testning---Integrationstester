import { IMovie } from "../../models/Movie";

export const mockData: IMovie[] = [
  {
    Title: "Movie 11",
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

export const reverseMockData: IMovie[] = [
  {
    Title: "Star Wars",
    Year: "1994",
    imdbID: "1234",
    Poster: "posterURL",
    Type: "Action",
  },
  {
    Title: "Die Hard",
    Year: "1996",
    imdbID: "1234",
    Poster: "posterURL",
    Type: "comedy",
  },
];

export async function getData(searchText: string): Promise<IMovie[]> {
  return new Promise((resolve, reject) => {
    if (searchText) resolve(mockData);
    else reject();
  });
}

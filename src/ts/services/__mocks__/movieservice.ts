import { IMovie } from "../../models/Movie";

export const mockData: IMovie[] = [
  {
    Title: "A Movie",
    Year: "1994",
    imdbID: "1234",
    Poster: "posterURL",
    Type: "Action",
  },
  {
    Title: "B Movie",
    Year: "1996",
    imdbID: "1234",
    Poster: "posterURL",
    Type: "comedy",
  },
];

export const longerMockData: IMovie[] = [
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
  {
    Title: "Love Actually",
    Year: "1994",
    imdbID: "1234",
    Poster: "posterURL",
    Type: "Romantic Comedy",
  },
  {
    Title: "Harry Potter",
    Year: "1994",
    imdbID: "1234",
    Poster: "posterURL",
    Type: "Adventure",
  },
];

export const doubleMockData: IMovie[] = [
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
  {
    Title: "Die Hard",
    Year: "1996",
    imdbID: "1234",
    Poster: "posterURL",
    Type: "comedy",
  },
  {
    Title: "Harry Potter",
    Year: "1994",
    imdbID: "1234",
    Poster: "posterURL",
    Type: "Adventure",
  },
];

export const fakeMockData: IMovie[] = [];

export const getData = async (searchText: string): Promise<IMovie[]> => {
  return new Promise((resolve, reject) => {
    if (searchText !== "") {
      if (searchText !== "search not") {
        resolve(mockData);
      } else {
        resolve([]);
      }
    } else {
      reject();
    }
  });
};

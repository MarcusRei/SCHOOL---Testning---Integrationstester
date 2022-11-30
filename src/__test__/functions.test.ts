import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";
import {
  mockData,
  reverseMockData,
} from "../ts/services/__mocks__/movieservice";

describe("movieSort()", () => {
  describe("if desc = true", () => {
    test("should put Movie 11 in position 0 if a has longer title", async () => {
      //Arrange
      let testMovies: IMovie[] = mockData;

      //Act
      movieSort(testMovies);
      //Assert
      expect(testMovies[0].Title).toBe("Movie 11");
    });

    test("should put Movie 2 in position 0 if a has longer title", async () => {
      //Arrange
      let testMovies: IMovie[] = reverseMockData;

      //Act
      movieSort(testMovies);
      //Assert
      expect(testMovies[0].Title).toBe("Die Hard");
    });
  });
  describe("if desc = false", () => {
    test("should put Movie 2 in position 0", () => {
      //Arrange
      let testMovies: IMovie[] = mockData;
      let testBoolean: boolean = false;
      //Act
      movieSort(testMovies, testBoolean);
      //Assert
      expect(testMovies[0].Title).toBe("Movie 2");
    });

    test("should put Movie 1 in position 0", () => {
      //Arrange
      let testMovies: IMovie[] = reverseMockData;
      let testBoolean: boolean = false;
      //Act
      movieSort(testMovies, testBoolean);
      //Assert
      expect(testMovies[0].Title).toBe("Star Wars");
    });
  });
});

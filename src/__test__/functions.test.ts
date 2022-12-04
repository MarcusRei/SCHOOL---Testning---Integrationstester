import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";
import {
  mockData,
  longerMockData,
  doubleMockData,
} from "../ts/services/__mocks__/movieservice";

describe("movieSort()", () => {
  describe("if desc = true", () => {
    test("should sort alphabetically", async () => {
      //Arrange
      let testMovies: IMovie[] = longerMockData;

      //Act
      movieSort(testMovies);
      //Assert
      expect(testMovies[0].Title).toBe("Die Hard");
      expect(testMovies[1].Title).toBe("Harry Potter");
      expect(testMovies[2].Title).toBe("Love Actually");
      expect(testMovies[3].Title).toBe("Star Wars");
    });

    test("should sort alphabetically with doubles", async () => {
      //Arrange
      let testMovies: IMovie[] = doubleMockData;

      //Act
      movieSort(testMovies);
      //Assert
      expect(testMovies[0].Title).toBe("Die Hard");
      expect(testMovies[1].Title).toBe("Die Hard");
      expect(testMovies[2].Title).toBe("Harry Potter");
      expect(testMovies[3].Title).toBe("Star Wars");
    });
  });
  describe("if desc = false", () => {
    test("should sort reversed alphabetically", () => {
      //Arrange
      let testMovies: IMovie[] = longerMockData;
      let testBoolean: boolean = false;
      //Act
      movieSort(testMovies, testBoolean);
      //Assert
      expect(testMovies[0].Title).toBe("Star Wars");
      expect(testMovies[1].Title).toBe("Love Actually");
      expect(testMovies[2].Title).toBe("Harry Potter");
      expect(testMovies[3].Title).toBe("Die Hard");
    });

    test("should sort in reversed alphabetically with doubles", () => {
      //Arrange
      let testMovies: IMovie[] = doubleMockData;
      let testBoolean: boolean = false;
      //Act
      movieSort(testMovies, testBoolean);
      //Assert
      expect(testMovies[0].Title).toBe("Star Wars");
      expect(testMovies[1].Title).toBe("Harry Potter");
      expect(testMovies[2].Title).toBe("Die Hard");
      expect(testMovies[3].Title).toBe("Die Hard");
    });
  });
});

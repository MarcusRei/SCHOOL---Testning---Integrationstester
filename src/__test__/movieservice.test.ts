/**
 *@jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { getMovies } from "../ts/services/__mocks__/movieservice";

jest.mock("./../ts/services/movieservice.ts");

test("should get mock data", async () => {
  let movies: IMovie[] = await getMovies();
  //Arrange
  //Act
  //Assert
  expect(movies.length).toBeGreaterThan(0);
});

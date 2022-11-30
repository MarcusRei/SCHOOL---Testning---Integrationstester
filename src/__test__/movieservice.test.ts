/**
 *@jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";
import { getMovies, mockData } from "../ts/services/__mocks__/movieservice";

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => {
      resolve({
        data: {
          Search: mockData,
        },
      });
    });
  },
}));

//Klar
describe("getData()", () => {
  test("should get mock data", async () => {
    //Arrange
    let searchText: string = "Sök";
    //Act
    let response: IMovie[] = await getData(searchText);
    //Assert
    expect(response.length).toBe(2);
    expect(response[0].Year).toBe("1994");
  });
});

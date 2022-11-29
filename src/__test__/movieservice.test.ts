import { IMovie } from "../ts/models/Movie";
import {} from "module";

let mockData: IMovie[] = [];

jest.mock("./../ts/services/movieservice.ts");

test("should get mock data", async () => {
  //Arrange
  //Act
  let result = await getData;
  //Assert
  expect(result.length).toBe(10);
});

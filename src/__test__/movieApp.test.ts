/**
 *@jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import * as movieFunctions from "../ts/movieApp";
import { mockData } from "../ts/services/__mocks__/movieservice";
//Klar
describe("displayNoResult()", () => {
  test("should show change html", () => {
    //Arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    //Act
    movieFunctions.displayNoResult(container);

    //Assert
    expect(container.innerHTML).toBe("<p>Inga sökresultat att visa</p>");
    document.body.innerHTML = "";
  });
});

//Klar
describe("createHtml()", () => {
  test("should create HTML", () => {
    //Arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;
    let testMovies = mockData;

    let testContainer: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    //Act
    movieFunctions.createHtml(testMovies, testContainer);

    //Assert
    expect(testContainer.innerHTML).toBe(
      '<div class="movie"><h3>Movie 11</h3><img src="posterURL" alt="Movie 11"></div><div class="movie"><h3>Movie 2</h3><img src="posterURL" alt="Movie 2"></div>'
    );

    document.body.innerHTML = "";
  });
});

//Inte klar
describe("handleSubmit", () => {
  /*  test("should do something", () => {
    //Arrange
    //Act
    handleSubmit();
    //Assert
    expect().toBe();
  }); */
});

describe("init()", () => {
  test("should add submit eventlistener", () => {
    //Arrange

    /* let testPromise = new Promise<void>((resolve, reject) => {}); */

    let spy = jest.spyOn(movieFunctions, "handleSubmit").mockReturnThis();

    document.body.innerHTML = `
    <form id="searchForm">
    <button type="submit" id="search">Sök</button>
    </form>`;

    movieFunctions.init();

    //Act
    (document.getElementById("searchForm") as HTMLFormElement)?.submit();

    //Assert
    expect(spy).toHaveBeenCalled();

    document.body.innerHTML = "";
  });
});

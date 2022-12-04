/**
 *@jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import * as movieFunctions from "../ts/movieApp";
import { mockData } from "../ts/services/__mocks__/movieservice";
//Klar
describe("displayNoResult()", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should show error message", () => {
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
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

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
    expect(document.querySelectorAll("div.movie").length).toBe(2);
    expect(document.querySelectorAll("h3").length).toBe(2);
    expect(document.querySelectorAll("img").length).toBe(2);

    document.body.innerHTML = "";
  });
});

//Inte klar
describe("handleSubmit", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should call createHtml() if list contains more than zero", async () => {
    //Arrange
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>`;

    (document.getElementById("searchText") as HTMLInputElement).value =
      "search";

    let spy = jest.spyOn(movieFunctions, "createHtml").mockReturnValue();

    //Act
    await movieFunctions.handleSubmit();

    //Assert
    expect(spy).toHaveBeenCalled();

    document.body.innerHTML = "";
  });

  test("should call displayNoResult() via catch", async () => {
    //Arrange
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>`;

    (document.getElementById("searchText") as HTMLInputElement).value = "";

    let spy = jest.spyOn(movieFunctions, "displayNoResult").mockReturnValue();

    //Act
    await movieFunctions.handleSubmit();
    //Assert
    expect(spy).toHaveBeenCalled();
    document.body.innerHTML = "";
  });

  /* test("should call displayNoResult() via else", async () => {
    //Arrange
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>`;

    (document.getElementById("searchText") as HTMLInputElement).value =
      "search not found";

    let spy = jest.spyOn(movieFunctions, "displayNoResult").mockReturnValue();

    //Act
    await movieFunctions.handleSubmit();
    //Assert
    expect(spy).toHaveBeenCalledTimes(0);
    document.body.innerHTML = "";
  }); */
});

describe("init()", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should add submit eventlistener", () => {
    //Arrange

    let spy = jest.spyOn(movieFunctions, "handleSubmit").mockReturnValue(
      new Promise<void>((resolve) => {
        resolve();
      })
    );

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

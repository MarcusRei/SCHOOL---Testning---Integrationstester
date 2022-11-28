/**
 *@jest-environment jsdom
 */
import { displayNoResult } from "../ts/movieApp";

test("should show change html", () => {
  //Arrange
  document.body.innerHTML = `<div id="movie-container"></div>`;
  let testContainer: HTMLDivElement = document.getElementById(
    "movie-container"
  ) as HTMLDivElement;
  //Act
  displayNoResult(testContainer);

  //Assert
  expect(noMessage.innerHTML).toBe("Inga sökresultat att visa");
});

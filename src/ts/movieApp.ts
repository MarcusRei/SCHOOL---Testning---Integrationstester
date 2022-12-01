import { IMovie } from "./models/Movie";
import { getData } from "./services/movieservice";
//Skapar lista
let movies: IMovie[] = [];

//Lägger till submithändelselyssnare på searchform
export const init = () => {
  let form = document.getElementById("searchForm") as HTMLFormElement;
  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    exports.handleSubmit();
  });
};

export async function handleSubmit() {
  //searchText blir userinput
  let searchText = (document.getElementById("searchText") as HTMLInputElement)
    .value;
  //Tömmer movie-containern
  let container: HTMLDivElement = document.getElementById(
    "movie-container"
  ) as HTMLDivElement;
  container.innerHTML = "";

  try {
    //Hämtar data med searchText
    movies = await getData(searchText);
    //om listan med filmer är större än noll kör createHtml
    if (movies.length > 0) {
      exports.createHtml(movies, container);
      //Om listan är noll
    } else {
      exports.displayNoResult(container);
    }
    //teknisk error
  } catch {
    exports.displayNoResult(container);
  }
}
//Skapar upp HTML
export const createHtml = (movies: IMovie[], container: HTMLDivElement) => {
  for (let i = 0; i < movies.length; i++) {
    let movie = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");

    //Sätter poster och title i repsektive html-element, samt lägger på class "movie"
    movie.classList.add("movie");
    title.innerHTML = movies[i].Title;
    img.src = movies[i].Poster;
    img.alt = movies[i].Title;

    movie.appendChild(title);
    movie.appendChild(img);

    container.appendChild(movie);
  }
};
//Visar ett tomt resultat om inga sökresultat
export const displayNoResult = (container: HTMLDivElement) => {
  let noMessage = document.createElement("p");

  noMessage.innerHTML = "Inga sökresultat att visa";

  container.appendChild(noMessage);
};

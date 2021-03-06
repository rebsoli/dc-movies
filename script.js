const dcMovies = document.querySelector(".dcMovies");

let movies = [
  {
    name: "Superman: Doomsday",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/c/c5/Superman_Doomsday_logo.JPG",
    releaseDate: "September 21, 2007",
    continuity: "Standalone",
  },

  {
    name: "Justice League: The New Frontier",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTU5NzM0NTU0NF5BMl5BanBnXkFtZTgwOTEyNzAwNzE@._V1_.jpg",
    releaseDate: "February 26, 2008",
    continuity: "Standalone",
  },

  {
    name: "Batman: Gotham Knight",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/f/f0/Batman_Gotham_Knight.jpg",
    releaseDate: "July 8, 2008",
    continuity: "Nolanverse (unofficial)",
  },
  {
    name: "Wonder Woman",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Ww_film_2009_bluray.jpg",
    releaseDate: "March 3, 2009",
    continuity: "Standalone",
  },

  {
    name: "Green Lantern: First Flight",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/4/48/GL_First_Flight.jpg",
    releaseDate: "July 28, 2009",
    continuity: "Standalone",
  },

  {
    name: "Superman/Batman: Public Enemies",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Sup_bat_public_enemies_dvd.jpg",
    releaseDate: "September 29, 2009",
    continuity: "Continues in the Superman/Batman comic book series",
  },

  {
    name: "Justice League: Crisis on Two Earths",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/4/41/Justice_League-Crisis_On_Two_Earths.jpg",
    releaseDate: "July 8, 2008",
    continuity: "Continues in: Doom",
  },

  {
    name: "Batman: Under the Red Hood",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Batman_under_the_red_hood_poster.jpg",
    releaseDate: "July 7, 2010",
    continuity: "Standalone",
  },

  {
    name: "Superman/Batman: Apocalypse",
    poster: "https://upload.wikimedia.org/wikipedia/en/f/f2/SBApocalypse.jpg",
    releaseDate: "September 28, 2010",
    continuity: "Continues in the Superman/Batman comic book series",
  },

  {
    name: "All-Star Superman",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/b/bc/AllStarSuperman.jpg",
    releaseDate: "February 22, 2011	",
    continuity: "Standalone",
  },

  {
    name: "Green Lantern: Emerald Knights",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjI4MTcyYzItMDQ3Ni00OWNmLWI2MGItYzczY2IxZDFiMzBlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "July 7, 2011",
    continuity: "Standalone",
  },

  {
    name: "Batman: Year One",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/Bat_year_one_film.jpg",
    releaseDate: "October 18, 2011",
    continuity: "Continues in: Year One / Dark Knight Returns comics",
  },

  {
    name: "Justice League: Doom",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d4/Jla_doom_2012.jpg",
    releaseDate: "February 28, 2012",
    continuity: "Crisis on Two Earths / Doom",
  },

  {
    name: "Superman vs. The Elite",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzcyMjAwYzItNjc0ZS00NzViLWFkNWEtYTk0ODdlY2U0ZTJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "June 12, 2012	",
    continuity: "Standalone",
  },

  {
    name: "Batman: The Dark Knight Returns",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/Batman_The_Dark_Knight_Returns_%28film%29.jpg",
    releaseDate: "September 25, 2012 (part 1)",
    continuity: "Year One / Dark Knight Returns comics",
  },

  {
    name: "Batman: The Dark Knight Returns",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/Batman_The_Dark_Knight_Returns_%28film%29.jpg",
    releaseDate: "January 29, 2013 (part 2)",
    continuity: "Year One / Dark Knight Returns comics",
  },

  {
    name: "Superman: Unbound",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTkzMjczODQzMV5BMl5BanBnXkFtZTcwOTIyOTQ0OQ@@._V1_.jpg",
    releaseDate: "May 7, 2013",
    continuity: "Standalone",
  },
  // DCAMU
  {
    name: "Justice League: The Flashpoint Paradox",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Justice_League_-_The_Flashpoint_Paradox.jpg",
    releaseDate: "July 30, 2013	",
    continuity: "DCAMU",
  },

  {
    name: "Justice League: War",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/f/f4/Justice_League-War.jpg",
    releaseDate: "February 4, 2014",
    continuity: "DCAMU",
  },

  {
    name: "Son of Batman",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjdkZWFhNzctYmNhNy00NGM5LTg0Y2YtZWM4NmU2MWQ3ODVkXkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_.jpg",
    releaseDate: "May 6, 2014",
    continuity: "DCAMU",
  },

  {
    name: "Batman: Assault on Arkham",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/c/c0/Batman_Assault_on_Arkham_cover.jpeg",
    releaseDate: "July 29, 2014",
    continuity: "Arkhamverse",
  },

  {
    name: "Justice League: Throne of Atlantis",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/9/9e/Justice_League_-_Throne_of_Atlantis.jpg",
    releaseDate: "January 13, 2015",
    continuity: "DCAMU",
  },

  {
    name: "Batman vs. Robin",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/0/00/Bat_vs_robin_cover.jpg",
    releaseDate: "April 7, 2015",
    continuity: "DCAMU",
  },

  {
    name: "Justice League: Gods and Monsters",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzljNmZiNTktMTU4Ni00MTE2LWFmOTctYzY1NWJlY2ZiZjA3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "July 28, 2015",
    continuity: "Standalone",
  },

  {
    name: "Batman: Bad Blood",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWZiZmZhYmQtYjVkZi00MWIzLWEzM2MtYzhkNjliNzc2MTMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "January 20, 2016",
    continuity: "DCAMU",
  },

  {
    name: "Justice League vs. Teen Titans",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/2/29/Justice_League_vs._Teen_Titans.jpg",
    releaseDate: "March 29, 2016",
    continuity: "DCAMU",
  },

  {
    name: "Batman: The Killing Joke",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/1/11/Batman-The_Killing_Joke_%28film%29.jpg",
    releaseDate: "July 22, 2016",
    continuity: "Standalone",
  },

  {
    name: "Justice League Dark",
    poster:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTjE6hS-aWCWFPAjdmyjj4Y4PXgxjLS-EteasAMeM7RF8B5Iq9z",
    releaseDate: "January 24, 2017",
    continuity: "Standalone",
  },

  {
    name: "Teen Titans: The Judas Contract",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/4/4f/Teen_Titans_The_Judas_Contract.jpg",
    releaseDate: "March 31, 2017",
    continuity: "DCAMU",
  },

  {
    name: "Batman and Harley Quinn",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTQzM2JkYTAtY2ExNi00N2ZhLWE5NDctMDQyMWU5ZjcwZDEwXkEyXkFqcGdeQXVyMjM5NDQzNTk@._V1_.jpg",
    releaseDate: "August 15, 2017",
    continuity: "DCAU",
  },

  {
    name: "Batman: Gotham by Gaslight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTJhNjYyMGItODdhOC00ZTZmLTk1MTMtZDRhMmZkYTRiOGJkXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "January 23, 2018",
    continuity: "Standalone",
  },

  {
    name: "Suicide Squad: Hell to Pay",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGYzYTZmODktNTI5MS00M2YyLThlMTQtYzY3M2ViODc2OGE2XkEyXkFqcGdeQXVyMjUzNDMwODc@._V1_.jpg",
    releaseDate: "March 27, 2018",
    continuity: "DCAMU",
  },

  {
    name: "The Death of Superman",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNWZkMjYzNjctYTMyZi00MjdjLTg5MzMtYjdhM2M0MTI5ZWFkXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "July 24, 2018",
    continuity: "Standalone",
  },

  {
    name: "Constantine: City of Demons",
    poster:
      "https://i.pinimg.com/736x/57/1f/45/571f459a3a742947ce1b98dd539ced52.jpg",
    releaseDate: "October 9, 2018",
    continuity: "DCAMU",
  },

  {
    name: "Reign of the Supermen",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2Y3OThjNGMtYTkwMS00ZjFjLTllNzQtMTBkNGYxMzk4NWU2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    releaseDate: "January 15, 2019",
    continuity: "DCAMU",
  },

  {
    name: "Justice League vs. the Fatal Five",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTk5ODdkYzQtMDFjYS00YjgwLWI2N2EtZmU1MWRmMzFiNzdjXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg",
    releaseDate: "March 30, 2019",
    continuity: "DCAU",
  },

  {
    name: "Batman: Hush",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2M4MTRiNTEtNmMxMS00YWVkLWJkMGQtNGFmNTlhZmEyNjk1XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    releaseDate: "July 20, 2019",
    continuity: "DCAMU",
  },

  {
    name: "Wonder Woman: Bloodlines",
    poster:
      "https://www.newdvdreleasedates.com/images/posters/large/wonder-woman-bloodlines-2019-01.jpg",
    releaseDate: "October 5, 2019",
    continuity: "DCAMU",
  },

  {
    name: "Superman: Red Son",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDg3NDc5YzEtOTk1My00ZTZhLTlmNjctZTJlNjYzZjE0MTI1XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    releaseDate: "February 25, 2020",
    continuity: "Standalone",
  },

  {
    name: "Justice League Dark: Apokolips War",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZDNjMjE5YmUtOTUwOC00MjAyLWJmMzktZjlkMjQyYzNiNmU3XkEyXkFqcGdeQXVyNTA4NzExMDg@._V1_.jpg",
    releaseDate: "May 5, 2020",
    continuity: "DCAMU",
  },

  {
    name: "Superman: Man of Tomorrow",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTQ2M2M2OTYtM2Y1ZC00Y2ExLTk0NTQtNDViYWU4YjhjN2I5XkEyXkFqcGdeQXVyNzU3NjUxMzE@._V1_.jpg",
    releaseDate: "August 23, 2020",
    continuity: "DCOAMU",
  },

  {
    name: "Batman: Soul of the Dragon",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzgwM2UyODctY2RkNC00NzFiLWI0YmMtN2NmMWFjMzQzZWE1XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_.jpg",
    releaseDate: "January 12, 2021",
    continuity: "Standalone",
  },

  {
    name: "Justice Society: World War II",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ4Njk5ODMtNjZhMC00OTRjLTg3NzktYjViNmE1ZWE5MzhlXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_.jpg",
    releaseDate: "April 27, 2021",
    continuity: "DCOAMU",
  },

  {
    name: "Batman: The Long Halloween (film)(part 1)",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOWExMjU1OTctNGIwZS00MjY2LWE2YWUtZWVlOTRjZDFhODVjXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_.jpg",
    releaseDate: "June 22, 2021",
    continuity: "DCOAMU",
  },

  {
    name: "Batman: The Long Halloween (film)(part 2)",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOWExMjU1OTctNGIwZS00MjY2LWE2YWUtZWVlOTRjZDFhODVjXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_.jpg",
    releaseDate: "July 27, 2021",
    continuity: "DCOAMU",
  },

  {
    name: "Injustice",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/7/71/Injustice_%282021_film%29.jpg",
    releaseDate: "October 19, 2021",
    continuity: "Standalone",
  },

  {
    name: "Catwoman: Hunted",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOGJkNGUzM2YtNzMzOS00Yjg4LWIyZWMtMzc4OGJhMDVmMGUyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_FMjpg_UX1000_.jpg",
    releaseDate: "February 8, 2022",
    continuity: "Young Justice (unofficial)",
  },
];

function displayMovies(array = []) {
  dcMovies.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let movie = array[i];

    let movie_element = document.createElement("div");
    movie_element.classList.add("list-movie");

    // Mostrando os t??tulos
    let title = document.createElement("h2");
    title.classList.add("movie-title");
    title.innerText = movie.name;
    movie_element.appendChild(title);

    // Mostrando as imagens
    let cover = document.createElement("div");
    cover.classList.add("movie-cover");
    cover.innerHTML = `<img src=${movie.poster}>`;
    movie_element.appendChild(cover);

    // Mostrando a data de lan??amento
    let release = document.createElement("div");
    release.classList.add("movie-release");
    release.innerText = movie.releaseDate;
    movie_element.appendChild(release);

    // Mostrando a data de lan??amento
    let continuity = document.createElement("div");
    continuity.classList.add("movie-continuity");
    continuity.innerText = movie.continuity;
    movie_element.appendChild(continuity);

    dcMovies.appendChild(movie_element);
  }
}

displayMovies(movies);

const standaloneFilter = movies.filter(
  (item) => item.continuity == "Standalone"
);

const dcamuFilter = movies.filter((item) => item.continuity == "DCAMU");

const dcoamuFilter = movies.filter((item) => item.continuity == "DCOAMU");

const othersFilter = movies.filter(
  (item) =>
    item.continuity !== "DCOAMU" &&
    item.continuity !== "DCAMU" &&
    item.continuity !== "Standalone"
);

const header = document.querySelector("header");
const scrollBack = document.querySelector(".scroll-back");

scrollBack.onclick = () => {
  header.scrollIntoView();
};

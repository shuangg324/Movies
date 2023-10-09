//DATA REQUESTS API: http://www.omdbapi.com/?apikey=ecd810e0&
//POSTER API: http://img.omdbapi.com/?apikey=ecd810e0&

const url = "https://www.omdbapi.com/?apikey=ecd810e0&";
let title = "";

async function loadMovies(filter) {
  const loadingEl = document.querySelector(".loading");

  setTimeout(() => {
    loadingEl.classList += " loading__spin";
  }, 200);

  const res = document.querySelector(".movie__cards--wrapper");
  res.style.visibility = "hidden";

  const movieTitle = await fetch(url + `s=${title}`);

  const movieTitleData = await movieTitle.json();
  const movieTitleArray = movieTitleData.Search.slice(0, 10); //converts movieTitleData to array with .Search (this way we can use .map function)...Search.slice(0,10) shows first 8 movies
  const movieEl = document.querySelector(".movie__cards--wrapper");

  if (!movieEl) {
    movieEl = await preMovies();
  }

  if (filter === "NEW_TO_OLD") {
    movieTitleArray.sort((a, b) => b.Year - a.Year);
  } else if (filter === "OLD_TO_NEW") {
    movieTitleArray.sort((a, b) => a.Year - b.Year);
  } else if (filter === "RATING") {
    movieTitleArray.sort((a, b) => b.Rating - a.Rating);
  }

  setTimeout(() => {
    res.style.visibility = "visible";
    movieEl.innerHTML = movieTitleArray
      .map((movie) => movieHTML(movie))
      .join("");
    const searchTitleEl = document.querySelector(".title");
    searchTitleEl.innerHTML = `Results for: ${title}
    <select class ="filterMovie" id="filter" onchange="filterMovies(event)">
              <option value="" disabled selected>Filter</option>
              <option value="NEW_TO_OLD">Newest</option>
              <option value="OLD_TO_NEW">Oldest</option>
              <option value="RATING">Rating</option>
            </select>`;
    loadingEl.classList.remove("loading__spin");
  }, 1500);
}

function movieHTML(movie) {
  return `<li class="click featured__card">
                    <img class="featured__img" src="${movie.Poster}
                    " alt="" />
        <div class="movie__title"><h3>${movie.Title}</h3></div>
        <div class="movie__year"><h5>${movie.Year}</h5></div>
</li>`;
}

async function searchMovie(event) {
  title = event.target.value;
  event.preventDefault();
  loadMovies(title);
}

// Filter

function filterMovies(event) {
  loadMovies(event.target.value);
}

//Preloaded Movies

function preMovies() { 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Guardians of the Galaxy Vol. 2",
          year: 2017,
        },
        {
          id: 2,
          title: "Fast & Furious 6",
          year: 2013,
        },
        {
          id: 3,
          title: "Demon Slayer: Kimetsu no Yaiba",
          year: 2019,
        },
        {
          id: 4,
          title: "Demon Slayer: Kimetsu No Yaiba - To the Swordsmith Village",
          year: 2023,
        },
        {
          id: 5,
          title: "One Piece",
          year: 1999,
        },
        {
          id: 6,
          title: "John Wick",
          year: 2014,
        },
        {
          id: 7,
          title: "Barbie",
          year: 2023,
        },
        {
          id: 8,
          title: "Pokémon: The First Movie - Mewtwo Strikes Back",
          year: 1998,
        },
        {
          id: 9,
          title: "Suits",
          year: 2011,
        },
        {
          id: 10,
          title: "Dr.Stone",
          year: 2019,
        },
      ]);
    }, 1000);
  });
}

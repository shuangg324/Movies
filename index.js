//DATA REQUESTS API: http://www.omdbapi.com/?apikey=ecd810e0&
//POSTER API: http://img.omdbapi.com/?apikey=ecd810e0&
const url = "http://www.omdbapi.com/?apikey=ecd810e0&";


async function loadMovies(title) {
   
    const movieTitle = await fetch(
        url + `s=${title}`
    );
    const movieTitleData = await movieTitle.json();
    const movieTitleArray = movieTitleData.Search.slice(0, 10); //Search.slice(0,10) shows first 8 movies
    const movieEl = document.querySelector(".movie__cards--wrapper");
    movieEl.innerHTML = movieTitleArray.map((movie) => movieHTML(movie)).join("");
    console.log(movieTitleArray);

    const searchTitleEl = document.querySelector(".title"); 
    searchTitleEl.innerHTML = `Results for: ${title}`;
}

// function showMovieInfo(id) {
//     console.log(window.location);
//     // window.location.href = 
//     console.log(id);
// }

function movieHTML(movie) {
  return `<li class="click featured__card">
                    <img class="featured__img" src="${movie.Poster}
                    " alt="" />
        <div class="movie__title"><h3>${movie.Title}</h3></div>
</li>`;
}


function searchMovie(event) {
    title = event.target.value;
    event.preventDefault();
    loadMovies();
  }

// onclick="showMovieInfo(${movie.imdbID})"
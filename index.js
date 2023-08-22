//DATA REQUESTS API: http://www.omdbapi.com/?apikey=ecd810e0&
//POSTER API: http://img.omdbapi.com/?apikey=ecd810e0&


async function loadMovies(title) {

  const movieTitle = await fetch(
    `http://www.omdbapi.com/?apikey=ecd810e0&s=${title}`
  );
  const movieTitleData = await movieTitle.json();
  const movieTitleArray = movieTitleData.Search.slice(0,3); //Search.slice(0,8) shows first 8 movies
  const movieEl = document.querySelector(".movie__cards--wrapper")
  movieEl.innerHTML = (movieTitleArray.map(movie => movieHTML(movie)).join(""))


}

function movieHTML(movie) {
    return `<li class="click featured__card">
    <div class="card__wrapper">
    <img class="featured__img" src="" alt="" />
        <div class="movie__card">
        <div class="movie__title"><h3>${movie.Title}</h3></div>
        </div>
    </div>
</li>`;
}


loadMovies("fast");


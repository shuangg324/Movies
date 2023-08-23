//DATA REQUESTS API: http://www.omdbapi.com/?apikey=ecd810e0&
//POSTER API: http://img.omdbapi.com/?apikey=ecd810e0&


async function loadMovies(title) {

  const movieTitle = await fetch(
    `http://www.omdbapi.com/?apikey=ecd810e0&s=${title}`
  );
  const movieTitleData = await movieTitle.json();
  const movieInfoEl = document.querySelector("movie__info--wrapper");
  const movieTitleArray = movieTitleData.Search.splice(0,10); //Search.slice(0,8) shows first 8 movies
  const movieEl = document.querySelector(".movie__cards--wrapper")
  movieEl.innerHTML = (movieTitleArray.map(movie => movieHTML(movie)).join(""))
    console.log(movieTitleArray)

}

function movieHTML(movie) {
    return `<li class="click featured__card">
                    <img class="featured__img" src="${movie.Poster}
                    " alt="" />
        <div class="movie__title"><h3>${movie.Title}</h3></div>
</li>`;
}
loadMovies("demon slayer");

function movieSearch() {
    const searchBarInput = document.getElementById("searchInput");
    const searchTerm = searchBarInput.value.trim();
    console.log(searchTerm);
}




  



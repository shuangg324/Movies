//DATA REQUESTS API: http://www.omdbapi.com/?apikey=ecd810e0&
//POSTER API: http://img.omdbapi.com/?apikey=ecd810e0&

const searchBarInput = document.querySelector(".search__results");


//search for movies
function movieSearch() {
    const searchTerm = searchBarInput.value;
    console.log(searchTerm);

  }

  movieSearch();

  const searchForm = document.getElementById("searchForm");
  searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  movieSearch();
});


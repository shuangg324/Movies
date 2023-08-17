//DATA REQUESTS API: http://www.omdbapi.com/?apikey=ecd810e0&
//POSTER API: http://img.omdbapi.com/?apikey=ecd810e0&


// load movies

// async function loadMovies(search) {
//     const URL = await fetch(`http://www.omdbapi.com/?apikey=ecd810e0&s=${search}`)
//     const data = await URL.json();
//     console.log(data);
// }

// loadMovies('lord')

//get movie image

async function movieImg(search) {
    const URL = await fetch(`http://img.omdbapi.com/?apikey=ecd810e0&s=${search}`);
    const data = await URL.json();
    console.log(data);
}

movieImg('hunger games')
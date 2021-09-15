const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById("movie-list");

    if(movies.length === 0){
        movieList.classList.remove("visible");
    }
    else{
        movieList.classList.add("visible");
    }
    movieList.innerHTML = "";

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement("li");
        const {info, ...otherProps} = movie;
        console.log(otherProps);
        // const { title: movieTitle } = info;
        // let { getFormattedTitle } = movie;
        // getFormattedTitle = getFormattedTitle.bind(movie);
        // let text = getFormattedTitle.call(movie);
        let text = movie.info.title;
        for(const key in info){
            if(key !== "title" && key !== "_title"){
                text += ` - ${key}: ${info[key]}`;
            }
            movieEl.textContent = text;
            movieList.appendChild(movieEl);
        }
    })

}

const filterMovieHandler = () => {
    const filterTitle = document.getElementById("filter-title").value;
    renderMovies(filterTitle);
}

const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if(title.trim() === "" || extraName.trim() === "" || extraValue.trim() === ""){
        return;
    }
    
    const newMovie = {
        info: {
            set title(val){
                if(val.trim() === ""){
                    this._title = "DEFAULT";
                    return
                }
                else{
                    this._title = val;
                }
            },
            get title(){
                return this._title;
            },
            [extraName]: extraValue
        },
        id: Math.random(),
        // getFormattedTitle: function(){
        //     return this.info.title.toUpperCase();
        // }
    }
    newMovie.info.title = title;
    console.log(newMovie);
    movies.push(newMovie);
    renderMovies();
}

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", filterMovieHandler);

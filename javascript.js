

const nuberOfFilms = prompt("Сколько фильмов вы смотрели?",'');
let personalMovieDB = {
    count: +nuberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

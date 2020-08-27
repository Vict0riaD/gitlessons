'use strict'
let nuberOfFilms;
function start() {
    nuberOfFilms = +prompt("Сколько фильмов вы смотрели?", '');
    while (nuberOfFilms == '' ||nuberOfFilms == null || isNaN(nuberOfFilms) ) {
        nuberOfFilms = +prompt("Сколько фильмов вы смотрели?", '');
    }
}
start();
let personalMovieDB = {
    count: +nuberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     if (a != '' && a != null && b != null && b != '' && a.length < 50 ){
//         personalMovieDB.movies[a] = b;
//         console.log('done')
//     } else {
//         console.log('eror');
//         i--;
//     }
//
// }
// let i = 0;
//  do {
//      const a = prompt('Один из последних просмотренных фильмов?', '0'),
//          b = prompt('На сколько оцените его?', '0');
//      if (true) {
//          personalMovieDB.movies[a] = b;
//          i++;
//          console.log('done')
//      } else {
//          i--;
//          console.log("Error..")
//      }
//  }

function rememberMyFilms(){
    let i = 0;
    while (i < 2) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != '' && a != null && b != null && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            i++;
            console.log('done')
        } else {
            console.log('eror');
            i--;

        }
    }
}
// rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман")
    } else {
        console.log("роизошла оибка")
    }
}
// detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

'use strict'
const nuberOfFilms = prompt("Сколько фильмов вы смотрели?", '');
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
//  while (i < 2);
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


    console.log(personalMovieDB)


if (personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель")
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман")
} else {
    console.log("роизошла оибка")
}
console.log(personalMovieDB)


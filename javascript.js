'use strict'

const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function() {
            personalMovieDB.count = +prompt("Сколько фильмов вы смотрели?", '');
            while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {

                personalMovieDB.count = +prompt("Сколько фильмов вы смотрели?", '');
            }
        },
        rememberMyFilms: function() {
            let i = 0;
            while (i < 2) {
                const a = prompt('Один из последних просмотренных фильмов?', ''),
                    b = prompt('На сколько оцените его?', '');
                if (a !== '' && a != null && b != null && b !== '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    i++;
                    console.log('done')
                } else {
                    console.log('eror');
                    i--;

                }
            }

        },
        detectPersonalLevel: function() {
            if (personalMovieDB.count < 10) {
                console.log("Просмотренно довольно мало фильмов");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log("Вы классический зритель")
            } else if (personalMovieDB.count >= 30) {
                console.log("Вы киноман")
            } else {
                console.log("роизошла оибка")
            }
        },
        showMyDB: function(hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        },
        toggleVissibleMyDB: function() {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        },
        writeYourGenres: function() {
            for (let i = 1; i <= 3; i++) {
                let genres = prompt(`Ваш любимый жанр под номером ${i}`);
                if (genres === '' || genres === null) {
                    console.log("Вы ввели некорректные данны или не ввели их вообще");
                    i--;
                } else {
                    personalMovieDB.genres[i - 1] = genres;
                }

            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`)
            });
        }
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
"use strict";

// Slav

//console.log(something);

// let und;
//console.log(und);

// const obj = {
//     name: "Jhon",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);
// //console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

// console.log(arr[1]);

//alert('Hello');25

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как ваше имя', '');
// answers[1] = prompt('Как ваше фаимилия', '');
// answers[2] = prompt('Сколько вам лет', '');

// document.write(answers);

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);

// let incr = 10;
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
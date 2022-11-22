// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = [];
// arr[0] = 1;
// arr[1] = 'hello';
// arr[10] = true;
// arr[5] = 'world';
// console.log(arr);
// console.log(arr[3]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book = {
//     title: 'story',
//     pageCount: 100,
//     genre: 'comedy'
// }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
//     Кожен автор має поля name,age

// let book = {
//     title: 'story',
//     pageCount: 100,
//     genre: 'comedy',
//     authors: [
//         {
//             name: 'Vasya',
//             age: 22
//         },
//         {
//             name: 'Petya',
//             age: 33
//         }
//     ]
// }

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль ' +
// 'пароль кожного користувача

let arr = [
    {
        title: 'story',
        pageCount: 100,
        genre: 'comedy',
        authors: [
            {
                name: 'Vasya',
                age: 22
            },
            {
                name: 'Petya',
                age: 33
            }
        ]
    },
    {
        title: 'story',
        pageCount: 100,
        genre: 'comedy',
        authors: [
            {
                name: 'Petya',
                age: 22
            },
            {
                name: 'Petya',
                age: 33
            }
        ]
    },
    {
        title: 'story',
        pageCount: 100,
        genre: 'comedy',
        authors: [
            {
                name: 'Roma',
                age: 22
            },
            {
                name: 'Petya',
                age: 33
            }
        ]
    }
]
console.log(arr[0].title);
console.log(arr[0].authors);
console.log(arr[0].authors[0]);
console.log(arr[0].authors[0]['age']);
console.log(arr[0].authors[0].age);
console.log(arr[0].authors[0].name);
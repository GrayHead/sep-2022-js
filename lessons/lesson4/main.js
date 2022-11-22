// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// // for of
// for (let user of users) {
//     document.write(`
//         <div class="user-box">
//             <h3>${user.name}</h3>
//             <p>${user.age} ${user.status}</p>
//         </div>
// `);
// }


// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (const product of products) {
//     document.write(
//         `
//         <div>
//             <h2>Назва - ${product.title},  Ціна -  ${product.price}</h2>
//             <img src="${product.image}" alt="${product.title}">
//         </div>
//         `
//     )
// }


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// // for of
// for (let user of users) {
//     if (!user.status) {
//         document.write(`
//             <div class="user-box">
//                 <h3>${user.name}</h3>
//                 <p>${user.age} ${user.status}</p>
//             </div>
//         `);
//     }
// }


// let x = 0;
// x = x + 1;
// console.log(x);
// x += 1;
// console.log(x);
// x++;
// console.log(x);

// let x = 0;
// x++;
// console.log(x); // 1
// x--;
// console.log(x);// 0
// ++x;
// console.log(x);//1
// --x;
// console.log(x); // 0
//
// // console.log(x++);//0
// console.log(++x);//1
// console.log(x); //1


// let users = [  // length = 11
//     /*0*/{name: 'vasya', age: 31, status: false},
//     /*1*/{name: 'petya', age: 30, status: true},
//     /*2*/{name: 'kolya', age: 29, status: true},
//     /*3*/{name: 'olya', age: 28, status: false},
//     /*4*/{name: 'max', age: 30, status: true},
//     /*5*/{name: 'anya', age: 31, status: false},
//     /*6*/{name: 'oleg', age: 28, status: false},
//     /*7*/{name: 'andrey', age: 29, status: true},
//     /*8*/{name: 'masha', age: 30, status: true},
//     /*9*/{name: 'olya', age: 31, status: false},
//     /*10*/{name: 'max', age: 31, status: true}
// ];

// debugger;
// iter - for of
//itar - for classic

// const user = 'asd';
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     console.log(user);
// }
// console.log(user);


// const obj = {}; // @#$%^
// // @#$%^.a
// obj.a = 'asd';
// // *&^%$
// obj = {};

// for (let i = Math.floor(users.length / 2); i < users.length; i++) {
//     const user = users[i];
//     console.log(user);
// }

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (user.age > 30) {
//         console.log(user);
//     }
// }

// ritar

// for (let i = users.length - 1; i >= 0; i--) {
//     const user = users[i];
//     console.log(user);
// }


// let u = {
//     name: 'olya',
//     age: 31,
//     status: false,
//     skills: []
// };
//
// // itin
//
// for (const field in u) {
//     console.log(field, u[field]);
// }


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// for (const user of users) {
//     for (const prop in user) {
//         console.log(prop, user[prop]);
//     }
//     console.log('-----------');
//
//
// }

// let arr = [11,22];
// for (const arrKey in arr) {
//     console.log(arrKey);
// }


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// let i = 0;
// while (i < users.length) {
//     let user = users[i];
//     if (user.status) {
//         console.log(user);
//     }
//     i++;
// }


// do {
//     console.log('ashdgashgd');
// } while (false)


// closures

// function userBuilder(name, age) {
//     let user = {name, age};
//
//     return {
//         setAge: function (age) {
//             if (typeof age === 'string') {
//                 throw new Error('newAge must be a number type')
//             } else {
//                 user.age = age;
//             }
//         },
//         userInfo: function () {
//             return {...user}
//         },
//         getAge: function () {
//             return user.age;
//         },
//     };
//
// }
//
// console.log();
// let builder = userBuilder('asd', 123);
// builder.setAge(100);
// console.log(builder.userInfo());

// destructur

// let user = {
//     name: 'kokos',
//     age: 31,
//     wife: {name: 'anna', age: 32},
//     skills: ['html', 'js']
// }
//
// const {name, age, wife: {wifeName: wifeName}} = user;
//
// console.log(user.name);
//
// let user2 = {...user};// {name:user.name,age:user.age}
//
//
// let user3 = {...user, status: true, name: 'abrikos'};
// console.log(user3);
//
// let user4 = {
//     ...user
// };
// user4.wife.name = 'olya';
// console.log(user.wife);

// Linked reference

let user = {
    name: 'kokos',
    age: 31,
    wife: {name: 'anna', age: 32},
    skills: ['html', 'js']
}

let user1 = user;
console.log(user1);

user1.name = 'Vasya';
console.log(user1);

console.log(user);

let parse = JSON.parse(JSON.stringify(user1));
console.log(parse);



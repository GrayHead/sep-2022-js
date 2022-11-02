// //            0    1       2              3
// let arr = [10500, true, 'asjgdhagd', [11, 22, 33]];
// console.log(arr);
// console.log(arr.length);
//
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[3]);
// arr[4] = 'hello';
// arr[5] = 'okten';
// console.log(arr);
//
// arr[0] = 100600;
// console.log(arr);
// console.log(arr.length);
// arr[arr.length] = 'nwe value';
// arr[arr.length] = 'nwe value2';
// arr[arr.length] = 'nwe value3';
// console.log(arr);
//
//
// console.log(arr[3]);
// console.log(arr[3][1]);


/*==========part 2 objects==========*/

// let user = {
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: true,
//     wife: {
//         name: 'anna',
//         age: 21
//     }
//
// }
// console.log(user);
// console.log(user.age);
// console.log(user['id']);
// console.log(user['status']);
// console.log(user.wife);
// user.wife.id = 1;
// console.log(user.wife.name);
// console.log(user['wife'].name);
// console.log(user.wife['name']);
// console.log(user['wife']['name']);
//
// user['surname'] = 'pupkin';
// let x = 'css'
// user.skills = ['js', x];
// console.log(user);
//
// console.log(user.skills[1]);


/*======part 3 ========= array of objects*/
//
//
// let party = [
//     {name: 'vasya', age: 19}, // 0
//     {name: 'petya', age: 20}, // 1
//     {name: 'olya', age: 21}, // 2
//     {name: 'masha', age: 19}, // 3
//     {name: 'anton', age: 20, skills: ['html', 'css', 'js']} // 4
// ];
// console.log(party);
// console.log(party[2].age);
// console.log(party[4].name);
// console.log(party[4].skills[2]);


let i = 0;
let x = i;
console.log(x);
console.log(i);
x = 100;
console.log(x);
console.log(i);


let user = {id: 1, name: " kokos"};
console.log(user);

let customer = user;
console.log(customer);

customer.age = 31;
console.log(customer);

console.log(user);

user.id = 100;

console.log(user);
console.log(customer);

console.log(typeof {});
console.log(typeof []);
// console.log(Array.isArray([]));
// console.log(Array.isArray({}));






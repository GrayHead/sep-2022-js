// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1,2,3];
//
// const sum = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;  // sum = sum + arrayElement
//     }
//     return sum;
// }
// console.log(sum(arr));

// Дано натуральное число n. Выведите все числа от 1 до n.

// let n = 5;
//
// for (let i = 1; i < n; i++) {
//     console.log(i);
//
// }

// Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в
// порядке убывания в противном случае.

// let appearAB = (a, b) => {
//     let arr = [];
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             arr.push(i)
//         }
//     } else if (a > b ){
//         for (let i = a; i >= b; i--) {
//             arr.push(i)
//         }
//     }
//     return arr ;
// }
// let appearAB1 = appearAB(12, 4);
// console.log(appearAB1);

// Створити масив з рандомних чисел а потім відсортувати його функцією sort і filter

// let arr = [];
//
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 100))
// }
// console.log(arr);
//
// arr.sort((a, b) => a - b);
// console.log(arr);

// 4356 --> '4000 + 300 + 50 + 6'

// const number = (number) => {
//     const arr = [];
//     let index = 0;
//
//     while (number) {
//         let i = number % 10 * 10 ** index++;
//         console.log(i);
//         arr.unshift(i);
//         number /= 10;
//         number = parseInt(number);
//
//         if (i === 0) {
//             arr.shift();
//         }
//     }
//     return arr.join('+');
// }
//
// let s = number(30303);
// console.log(s);


// function expanded_from(val) {
//     let copy = String(val);
//     let res_arr = []
//     for (let i = 0; i < copy.length; ++i) {
//         if (copy[i] !== '0') {
//             let res = copy[i] + '0'.repeat(copy.length - 1 - i)
//             res_arr.push(res);
//         }
//     }
//     return res_arr.join('+');
// }
//
// console.log(expanded_from(2040320));

// let foo = (str) => `${str}`.split('').reduce((acc, value, index, array) =>
//     value !== '0' ? [...acc, value + '0'.repeat(array.length - 1 - index)] : acc
// , []).join('+');
//
// console.log(foo(12345));








// function per(longSide, shortSide) {
//     return (longSide + shortSide) * 2;
// }
//
// let x = per(10, 20);
// console.log(x);


// function calculator(a, b, action) {
//
//     let result = NaN;
//
//     if (action === '+') {
//         result = a + b;
//     } else if (action === '-') {
//         result = a - b;
//     }
//
//     return result;
//
// }
//
// let data = calculator(10, 20, '+');
// console.log(data); //30

// function arrayPrinter(arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
//
// arrayPrinter([11, 22, 33]);
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
// arrayPrinter(users);


// 2 +
// 3 -

// function calc() {
//
//     if (arguments.length === 2) {
//         return arguments[0] + arguments[1];
//     } else if (arguments.length === 3) {
//         return arguments[0] - arguments[1] - arguments[2];
//
//     }
//
//     return 0;
//
//
// }
//
// console.log(calc(10, 20)); // 30
// console.log(calc(10, 20, 30));// -40


// function asd(y, ...xxx) {
//     console.log(xxx[0]);
//
// }
//
//
// asd(1, 2, 3, 4, 'asdasd', true, [], {});


// function addHTML(tag, text) {
//     document.write(`<${tag}>${text}</${tag}>`);
// }
//
// addHTML('h1', 'hello');
// addHTML('h3', 'okten');
// addHTML('div', 'okten');


// let asd = function () {
//     console.log(arguments);
//
// };
// asd();


// let arr = [];
//
// function addToArray(data) {
//     arr[arr.length] = data;
//
// }
//
// addToArray(10);
// addToArray(100);
// console.log(arr);


// let calculator =  function (a, b) {
//     return a + b;
// }

// let calculator = (a, b) => {
//     return a + b;
// }

// let calculator = (a, b) => a + b;

// let calculator = (a, b) => {
//     let result = a + b;
//     console.log(result);
//     return result;
// }


let user = {
    imya: 'vasya',
    greeting: function () {
        console.log(`hello my name is ${this.imya}`);
        console.log(this);
    },
    wife: {
        imya: 'anna',
        pryvit: function () {
            console.log(this)// your object
            return `hi my name is ${this.imya}`;

        },
        hi: () => {
            console.log(this); // window
            return `hi my name is ${this.imya}`;

        }
    }
}
user.greeting();




console.log(window);

console.log(user.wife.hi());




























const users = [
    {
        name:'Vasya',
        age:22,
        isMarried: true
    },
    {
        name:'Roma',
        age:22,
        isMarried: true
    },
    {
        name:'Anya',
        age:22,
        isMarried: false
    }
]

// let reduce = users.reduce((acc, value, index) => value.isMarried ? [...acc,{...value,flat: index +1}] : acc,[]);
// console.log(reduce);
// console.log(users);


// let reduce = users.reduce((acc, value, index) => {
//     if (value.isMarried) {
//         value.flat = index + 1;
//         acc.push(value);
//     }
//     return acc;
// },[]);
// console.log(reduce);

// let arr = [...users];
// console.log(...arr);

// let arr = [1,2,3,4,5];
//
// let number = arr.reduce((acc, value) => {
//     let res = acc + value;
//     console.log(acc);
//     console.log(value);
//     console.log('===================================');
//
//     return res;
// },0);
// console.log(number);


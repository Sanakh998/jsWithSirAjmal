// functions, array, loops,
// ES6: arrow, forEach, map, filter

let x = 10;
let y = x;
y++; // Changes in y only not in x.

// Truthy Falsy Rules.
let array = [10, 20, 30, 40, 10, 50, -5];
let ans = array.filter(x => {
    x = x + 5;
    return x;
});
console.log(ans);


// Truthy Falsy Rules 
// let array = [10, 20, 30, 0, -1, 40, 10, 50];
// let ans = array.filter(x => x - 10);
// console.log(ans);


// Truthy Falsy Rules 
// let array = [10, 20, 30, -1, 0, 40, 50];
// let ans = array.filter(x => {
//     x = x + 1;
//     return x;
// })
// console.log(ans);



// let array = [10, 20, 30, 40, 50];
// let ans = array.map(x => x < 25 ? x + 100 : x)
// console.log(ans);

// console.log([10, 20, 30, 40, 50].map(x => x < 25 ? x + 100 : x));


// let array = [10, 20, 30, 40, 50];
// let incArray = array.map(x => {
//     if(x < 25)
//         return x + 100;
//     else
//         return x;
// });
// console.log(incArray); // [110, 120, undefined, , undefined, undefined]





// let array = [10, 20, 30, 40, 50];
// let incArray = array.map(x => console.log(x));
// console.log(incArray);



// let array = [10, 20, 30, 40, 50];
// let incArray = array.map(x => console.log(x));
// console.log(incArray);


// let array = [10, 20, 30, 40, 50];
// let incArray = array.map(x => x);
// console.log(incArray);



// let array = [10, 20, 30, 40, 50];
// let incArray = array.map(x => x * 2);
// console.log(incArray);


// let array = [10, 20, 30, 40, 50];
// let incArray = array.forEach(x => {
//     console.log(x); // 10
//     return x * 2; // 20 ???
// });
// console.log(incArray);
// 10


// let array = [10, 20, 30, 40, 50];
// array.forEach(x => console.log(x ** 2));

// let array = [10, 20, 30, 40, 50];
// let square = x => console.log(x ** 2);
// array.forEach(square);


// let array = [10, 20, 30, 40, 50];
// let square = function(x){
//     console.log(x ** 2);
// };
// array.forEach(square);


// let array = [10, 20, 30, 40, 50];
// function square(x){
//     console.log(x ** 2);
// };
// array.forEach(square);




// // index based
// for(let i=0; i < array.length; i++)
//     console.log(array[i] * 3);











// let f = (x, y) => x + y;
// console.log(f(10, 20));


// let f = x => x + 10;
// console.log(f(10));


// let f = () => console.log("hello");
// f();

// let f = _ => console.log("hello");
// f();


// let f = () => [10, 30, 49];
// let ans = f();
// console.log(ans);

// function sum(x, y){
//     if(x > y)
//         return x + y;
//     else
//         return x * y;
// }


// let sum = (x, y) => {
//     x++;
//     y++;
//     if(x > y)
//         return x + y;
//     else
//         return x * y;
// }

// let x = 1;
// let y = 3;
// let sum = (x, y) => x + y;x - y;
// console.log(sum(10, 30));


// let sum = (x, y) => (x + y);
// console.log(sum(10, 30));

// let max = (x, y) => {
//     if(x > y)
//         return x;
//     else
//         return y;
//     }

// console.log(max(70, 30));


// let f = () => [10, 20, 30];
// console.log(f());

// let product = {id: 1, title: "abc"};
// let f = () => product;
// console.log(f());

// let f = () => {return {id: 1, title: "abc"}};
// console.log(f());

// let f = () => ({id: 1, title: "abc"});
// console.log(f());




// standard fun
// function sum(x, y){
//     return x + y;
// }

// let ans = sum(10, 20)
// console.log(ans);

// ES6: Arrow functions
// function: input(paramters) -> output (return)
// let sum = (x, y) => x + y;
// console.log(typeof sum);
// let ans = sum(10, 20);
// console.log(ans);

// console.log(sum(90, 80));
// console.log(sum(70, 80));



// let ans = ((x, y) => x + y)(40, 70);
// console.log(ans);
// console.log(ans(20, 30));




// console.log(((x, y) => x + y)(40, 70));









// function: input(paramters) -> output (return)

// function sum(x, y){
//     let ans = x + y;
//     console.log(ans);
// }

// let y = sum(10, 20);
// if(y !== undefined)
//     console.log(y);



// let ans = sum(10, 20);
// console.log(ans);
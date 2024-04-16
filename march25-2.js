// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
// operators
// Arithmetic operators

// precedence rule
// associativity of operators (L->R, R -> L)
// *, /
// +, -
// let ans = 10 * 20 / 10;
// console.log(ans);

// let x = 5 ** 2 ** 3;
// console.log(x);

// let x = 10 % 2;
// console.log(x);

// let x = 10;
// ++x; // x = x + 1
// x++;
// console.log(x);


// let x = 10;
// let y = 2 + ++x;
// console.log(x);
// console.log(y);


// function f(x){
//     console.log(x);
// }

// let x = 10;
// f(x++);

// let x = 10;
// ++x;
// console.log(x);

// let x = 5 + 5;
// let y = 5 * 2;
// let z = 5.5 + 4.5;

// ternary operator

// if statement
// let marks = 9;
// if(marks >= 50)
//     console.log("Pass");
// else
//     console.log("Fail");

// if expression / ternary operator
// let x = 2000;
// let y = 100;
// let max = x > y ? x : y;
// console.log(max);

// let x = 20000;
// let y = 100000;
// let z = 3000;
// // let max = x > y && x > z ? x : (y > z ? y : z);
// let max = x > y ? (x > z ? x : z) :  (y > z ? y : z);
// console.log(max);


// let marks = 90;
// let ans = marks >= 50 ? "Pass" : "Fail";
// console.log(ans);

// Comparison operators (true/false)
// >, >=, <, <=, ==, !=
// == (loose), === (strict)

// let x = 100 === "100";
// console.log(x);

let x = (10 > 3) + (90 > 8) + 40;
console.log(x);
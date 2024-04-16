// spread operator, destruct, rest operator - deep copy and shallow copy
// data types

// deep copy and shallow copy

// Value Type: number, boolean, string
// Ref Types: array, object

// value type
// let x = 10;
// console.log(x);
// let y = x;
// console.log(y);
// y = 20;

// console.log("----------------");
// console.log(x)
// console.log(y)

// call by value and call by ref
// Ref Types (shallow copy)
// let array1 = [10, 20, 30]; // 4 box
// let array2 = array1; // 1 box
// array2[0] = 90;
// array1[2] = 100;
// console.log(array1);
// console.log(array2);

// deep copy (... spread operator)
// let array1 = [10, 20, 30]; // 4 box
// let array2 = [...array1]; // 4 box
// array2[0] = 90;
// array1[2] = 100;
// console.log(array1);
// console.log(array2);

// let product1 = {
//     id: 101,
//     title: "LED TV",
//     price: 50000
// };

// let product2 = product1; // shallow copy
// let product2 = {...product1}; // deep copy
// product2.price = 60000;

// console.log(product1);
// console.log(product2);

// function f(x){
//     x = 20;
// }

// let x = 10;
//  f(x);
// console.log(x); // 10 


// function f(x){
//     x[0] = 20;
// }

// let x = [10]; // 2 box
// f(x);
// console.log(x); // [20]




function f(x){
  x[0] = 20;
}

let x = [10]; // 2 box
f([...x]);
console.log(x); // [10]




















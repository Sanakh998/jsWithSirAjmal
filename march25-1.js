// object
let product = {
  id: 102,
  title: "Led",
  price: 40000
};
// console.log(Object.values(product).length);

if(Object.values(product).length)
console.log("TRUE");
else
console.log("FALSE");



// array: is always truthy
// array.length
// let array = [];
// if(array.length)
//  console.log("TRUE");
// else
//  console.log("FALSE");


// truthy/ falsy
// boolean - true/false
// Primitives: number, string, boolean, undefined

// null ~ falsy
// let x = null;
// console.log(x);
// if(x)
//  console.log("TRUE");
// else
//  console.log("FALSE");


// undefined ~ falsy
// let x;
// console.log(x);
// console.log(typeof x);
// if(x)
//  console.log("TRUE");
// else
//  console.log("FALSE");



// // string - truthy=all other than "", falsy=""
// let x = "";
// console.log(x);
// console.log(typeof x);
// if(x)
//  console.log("TRUE");
// else
//  console.log("FALSE");



// number: 0, NaN ~ falsy, all other ~ Truthy
// Infinity, -Infinity, NaN
// let x = 10 / "abc";
// console.log(x);
// console.log(typeof x);
// if(x)
//  console.log("TRUE");
// else
// console.log("FALSE");




// let balance = 1;
// if(balance)
//  console.log("Your can make transaction");
// else
// console.log("Your can't make transaction");


// let active = false;
// if(active == true)
//     console.log("Your account is active");
// else
//     console.log("Your account is blocked.");
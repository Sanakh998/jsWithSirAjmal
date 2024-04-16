// es6+ op
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
// Nullish coalescing operator ??

let product = {
  id : 1,
  title: "Shirt",
}

// let p = product.colors?.price ?? "N.A.";
// console.log(p);

let p = "N.A." ?? product.colors?.price;
console.log(p);





// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// optional chaining ?.
// let product = {
//     id : 1,
//     title: "Shirt",
//     colors: {
//         name: "red",
//         price: 50000
//     }
// }

// let p = product.colors.price;
// // p ? console.log(p) : console.log("Price not available")
// p && console.log(p);




// logical operators - 3 operators
// and (&&), or (||), not (!)
// OR

// T || T = T
// T || F = T
// F || T = T
// F || F = F

// T-expr || expr = T-expr
// F-expr || expr = expr

// function f(x){
//     if(x > 10)
//         return 20;
// }

// let x = f(1) || 0;
// // if(x == undefined)
// //     x = 0;
// console.log(x);

// let x = "ASD" || "sdfsdf";
// console.log(x);




// and (&&)
// T && T = T
// T && F = F
// F && T = F
// F && F = F

// let error = false;
// let message = "Error is loading data";

// // if(error)
// //     console.log(message);


// error && console.log(message);

// <div> error && message </div>



// T && expr = expr
// falsy-expre && whatever = falsy-expr

// short-circuit
// let x = 1 && "Karachi";
// console.log(x);

// let x = 100 > 20 && 3 + 5;
// console.log(x);



// let x = "Lahore" && 100 > 20;
// console.log(x);


// let x = 100 > 20 && "Lahore";
// console.log(x);



// let x = 100 > 20 && 30 < 70;
// console.log(x);
let test = {0: 10, 1: 20, 2: 30};

console.log(test[0]);





let s =  {
        id: 101,
        name: "Ali",
        marks: 90,
        location: {
            log: 12.3234,
            lat: 3434.45
        },
        hobbies: {
            outdoor: ["Circ", "Foot"],
            indoor: ["Luddo", "Chess"]
        }
    };

console.log(s);



let students = [
    {
        id: 101,
        name: "Ali",
        marks: [90, 80, 70]
    },
    {
        id: 102,
        name: "Ahmad",
        marks: [90, 80, 70]
    },
    {
        id: 103,
        name: "Zuabir",
        marks: [90, 80, 70]
    }
];


console.log(students[0].marks[0]);




// data types:
// Primitives: number, string, boolean, undefined
// collection: array, object

// let students = [
//     {
//         id: 101,
//         name: "Ali",
//         marks: 90
//     },
//     {
//         id: 102,
//         name: "Ahmad",
//         marks: 80
//     },
//     {
//         id: 103,
//         name: "Zuabir",
//         marks: 50
//     }
// ];


// console.log(students[1].id);


// object: is a collection of properties
// property: key:value pair

// let student = {
//     id: 101,
//     name: "Ali",
//     marks: 90,
// };

// console.log(student.id);





// 2 programs: 2 semester, 5 students and each student took 3 tests
// 4D array : array of arrays
// program, semester, student, test
// let marks = [
//     [ // bcs
//         [ // sem 1
//             [80, 45, 90],
//             [50, 47, 78],
//             [80, 56, 89],
//             [40, 78, 23],
//             [35, 67, 34]
//         ],
//         [ // sem 2
//             [80, 45, 90],
//             [50, 47, 78],
//             [80, 56, 89],
//             [40, 509, 23],
//             [35, 67, 34]
//         ]
//     ],
//     [ // bba
//         [ // sem 1
//             [80, 45, 90],
//             [50, 47, 78],
//             [80, 56, 89],
//             [40, 78, 23],
//             [35, 67, 34]
//         ],
//         [  // sem 2
//             [80, 45, 90],
//             [50, 47, 78],
//             [80, 56, 89],
//             [40, 509, 23],
//             [35, 67, 34]
//         ]
//     ]
// ];

// console.log(marks[0][0][0][0]);




// 2 semester, 5 students and each student took 3 tests
// 3D array : array of arrays
// let marks = [
//     [
//         [80, 45, 90],
//         [50, 47, 78],
//         [80, 56, 89],
//         [40, 78, 23],
//         [35, 67, 34]
//     ],
//     [
//         [80, 45, 90],
//         [50, 47, 78],
//         [80, 56, 89],
//         [40, 509, 23],
//         [35, 67, 34]
//     ]
// ];

// console.log(marks);




// 5 students and each student took 3 tests
// 2D array : array of arrays
// let marks =
// [
//     [80, 45, 90],
//     [50, 47, 78],
//     [80, 56, 89],
//     [40, 78, 23],
//     [35, 67, 34]
// ];

// console.log(marks[2][3]);




// array - dymanic (size is not fixed)
// let prices = [100, 90, 35, 210];
// prices[10] = 200;
// prices[8] = 900;
// console.log(prices);




// // array - dymanic (size is not fixed)
// let prices = [100, 90, 35, 210];
// prices[4] = 200;
// prices[5] = 300;
// prices[6] = 600;
// prices[7] = 8700;
// console.log(prices);


// // array - dymanic (size is not fixed)
// let prices = [100, 90, 35, 210];
// prices[4] = 200;
// prices[5] = 300;
// prices[6] = 600;
// prices[7] = 8700;
// console.log(prices);




// array (index/subscript)
// let prices = [100, 90, 35, 210];
// prices[0] = 99;
// prices[1] = 80;
// console.log(prices);




// JS dynamically typed language
// let x = 10;
// console.log(x);
// console.log(typeof x);

// x = "ABC";
// console.log(x);
// console.log(typeof x);


// x = true;
// console.log(x);
// console.log(typeof x);



// // variable
// let x;
// console.log(x); // undefined
// console.log(typeof x);


// let x = 10.7; // number
// console.log(x);
// console.log(typeof x);
// let y = "Lahore"; // string
// console.log(y);
// console.log(typeof y);
// let z = false; // boolean
// console.log(z);
// console.log(typeof z);
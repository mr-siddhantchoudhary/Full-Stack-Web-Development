// //+++++++++++++++++++++++++++++++++++++++++++++++++
// const one = [1, 2, 3, 4]
// const two = [5, 6, 7, 8]

// // const three = one.concat(two);
// // const three = [one, two];
// // const three = [...one, ...two]

// // console.log(three);


// //+++++++++++++++++++++++++++++++++++++++++++++++++
// // Rest


// function manyArgument() {
//     let args = Array.from(arguments)
//     const myArr = args.map(el => el * 2)
//     console.log(myArr);
// }

// function manyArgumentv2(...args) {
//     //let args = Array.from(arguments)
//     const myArr = args.map(el => el * 2)
//     console.log(myArr);
// }

// manyArgument(2, 3); // 4, 6
// manyArgument(2, 3, 4); // [4, 6, 8]

// manyArgumentv2(2, 3); // 4, 6
// manyArgumentv2(2, 3, 4); // [4, 6, 8]


// const heros = ["spiderman", "hulk"]

// const newHeros = ["ironman", ...heros, "thor"]

// console.log(newHeros);





// const teacherName= "Hitesh Choudhary"
// console.log([...teacherName]);

function twoTest(...values){
    console.log(values);
}

console.log(twoTest("hitesh", "pw"));
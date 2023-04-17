// function calculateSquare(x){ //here x is a parameter
//     return x*x;
// }
// console.log(calculateSquare(3));

// function calculateSquare(x = 2){ //here x is a default parameter
//     return x*x;
// }
// console.log(calculateSquare(10));

// function multiple(x, y){ // function asking for two parameters
//     return x*y;
// }
// console.log(multiple(9, 8));

// function addElements([num1, num2, num3, num4]){
//     return num1 + num2 + num3 + num4;
// }

// let arr = [1, 2, 3, 4, 6];
// console.log(addElements(arr));

function multiple(x = 2, y){
    return x*y;
}

console.log(multiple(2 ,9));

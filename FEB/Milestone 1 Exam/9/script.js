/* 9. Check for Divisibility.

Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2. 
Use a for loop and continue statement */


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i in arr) {
//     if (i % 2 != 0) {
//         if (i % 3 == 0) {
//             console.log(i);
//         }
//     }
// }

for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if(num%2 === 0) {
        continue;
    }

    if (num%3 === 0) {
        console.log(num);
    }
}
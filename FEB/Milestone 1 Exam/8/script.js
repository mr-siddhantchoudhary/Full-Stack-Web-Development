// 8. Inverted right-angled triangle pattern with asterisks

// Write a program that takes an integer input i and prints an inverted right-angled triangld pattden of asterisks 
// with i rows.


// Inverted right-angled pattern:

// ******
// *****
// ****
// ***
// **
// *

// If i=6

// let i = 6;

// let arr = Array();

// for (let j = i; j >= 0; j--) {
//     for (let k = j; k >= 0; k--) {
//         arr.push("*");
//     }
//     let str = arr.join('');
//     console.log(str);
//     arr = []
// }

function rightAnglePattern(rows){
    let arr = Array();

    for (let j = rows; j >= 0; j--) {
        for (let k = j; k >= 0; k--) {
            arr.push("*");
        }
        let str = arr.join('');
        console.log(str);
        arr = []
    }
}

rightAnglePattern(10);
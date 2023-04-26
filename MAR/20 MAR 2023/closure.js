let score = 0;

function one() {
    let score = 1;
    console.log(score);
}

// one();
// console.log(score);

function two() {
    let score = 100;
    console.log(score);
}

function three() {
    let score = 300;
    console.log(score);
}

// one()
// two()
// three()
// console.log(score);

// function outerFunc() {
//     let outerValue = "I am outer value";
//     function innerFunc() {
//         let innerValue = "Inner Value"
//         console.log(innerInnerValue);
//         console.log(outerValue);
//         function innerOfInnerFunc() {
//             let innerInnerValue = "Inner Inner Value";
//             console.log(outerValue);
//         }
//         innerOfInnerFunc();
//     }
//     innerFunc();
// }

// outerFunc();

function outerFunc() {
    let outerValue = "Outside Value";
    function innerFunc() {
        console.log(outerValue);
    }
    innerFunc();
}

// outerFunc();

const errorMessage = "File not found"

// setTimeout(function callback() {
//     console.log(errorMessage);
// }, 1000)

let viewCount = 0;
const items = [2, 4, 6, 7];

items.forEach(function iterator(num){
    viewCount++;
    console.log(num);
})

console.log("View Count ", viewCount);
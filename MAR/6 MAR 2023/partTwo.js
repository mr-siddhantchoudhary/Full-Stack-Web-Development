// let arr = [2, 3, 4];

// arr.forEach(function(element, index, arr){
//     console.log(index, element, arr);
// })

// arr.forEach((element, index, arr) => {
//     console.log("arrow " +index, element, arr);
// })


const heros = ["nargraj", "doga", "dhruva", "maniraj"];

// heros.forEach((el) => console.log(el.toUpperCase()));

// const herosWithRaj = heros.filter((h) => {
//     return h.endsWith('raj');
// })

// console.log(herosWithRaj);

// heros.map((el) => console.log(el.toUpperCase()));

// Cart example

// const cartBill = [20, 30, 50];

// // const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0);

// // console.log(sumOfCartBill);

// // check if all values are number

// const gameScore = [200, 300, 310, 100, 250, 150, true];
// console.log(typeof gameScore[0]);

// const gameScoreCheck = gameScore.every((v) => typeof v === "number");

// console.log(gameScoreCheck);

// // check  if any score is 200

// const above200 = gameScore.find((score) => score > 200);

// console.log(above200);

// find index
//  const array1 = [5, 12, 8, 130, 44];

//  const isLargeNumber = (element) => element > 13;

//  console.log(array1.findIndex(isLargeNumber));

function isPrime(element) {
    if (element % 2 === 0 || element < 2) {
        return false;
    }

    for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
        if (element % factor === 0) {
            return false;
        }
    }

    return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime));
console.log([4, 6, 7, 9, 12].findIndex(isPrime));




// some 
// sort




function numberChecker(numbers) {
    return function(num) {
        return numbers.includes(num);
    }
}

let numbers = [1, 2, 3, 4, 5];
let checkNumber = numberChecker(numbers);

console.log(checkNumber(3));
console.log(checkNumber(6));
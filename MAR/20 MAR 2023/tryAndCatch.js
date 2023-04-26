// function isEvenOrOdd(x) {
//     if (x % 2 == 0) {
//         return "Even"
//     } else {
//         return Odd
//     }
// }

// console.log(isEvenOrOdd());

function isEvenOrOdd(x) {
    try {
        if (x % 2 == 0) {
            console.log("even");
        } else {
            console.lo("odd");
        }
        console.log("ending");
    } catch {
        console.log("handled");
    } finally {
        console.log("Whatever");
    }
}

// isEvenOrOdd(10)
// isEvenOrOdd(11)



//+++++++++++++++++++++++++++++++++++++++++++++++++++++

function isPrime(x) {
    try {
        for (let i = 2; i <= x - 1; i++) {
            if (x % i == 0) {
                throw new Error("Not a Prime");
            }
        }
        return "prime";
    } catch (err) {
        console.log("handled", err);
    } finally {
        console.log("End");
    }
}

isPrime(10);
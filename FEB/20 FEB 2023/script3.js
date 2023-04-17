function myFirstFunction(){
    console.log("This is");
    console.log("My first function");
}

function isEvenOrOdd(number){
    if (number % 2 == 0){
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

isEvenOrOdd(12);
isEvenOrOdd(22);
isEvenOrOdd(13);
isEvenOrOdd(15);

function addFourNumber(a, b, c, d){
    let result = a + b + c + d;
    return result;
}

x = addFourNumber(1, 2, 3, 4);
y = addFourNumber(12, 23, 4, 6);

function multiply(a, b){
    console.log(a * b);
}

multiply(addFourNumber(1,2,3,4), addFourNumber(2,3,4,5));
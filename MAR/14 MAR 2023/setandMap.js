// Set

const newSet = new Set()

newSet.add(2)
newSet.add(3)
newSet.add(4)
newSet.add(2)
newSet.add(1)



// console.log(newSet);

let myArray = [1, 2, 3, 4, 5, 2, 4]
// let arraySet = new Set(myArray)

// console.log(arraySet);


//+++++++++++++++++++++++++++++++++++++++++
// Map

const myMap = new Map()
console.log(myMap.size);

let arr = [
    [1, "Mithun"],
    [2, "Alka"],
    [3, "Prabir"],
    [4, "Shivam"],
    [5, "Vinay"],
    [3, "Prabirr"],
    [4, "Shivam"]
];

arr.map(el => myMap.set(el[0], el[1]))
console.log(myMap);

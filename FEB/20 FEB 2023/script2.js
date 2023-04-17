// let arr = [10, 11, 12, 13, 15, 16];

// console.log(arr);

// arr.push(14); // to add the new element at the last

// console.log(arr);

// arr.pop() //remove the element from the last
// arr.pop() //remove the element from the last

// console.log(arr);

// arr.shift();// remove the element from the start

// console.log(arr);

// arr.unshift(76); // add the element in the start

// console.log(arr);


// const a1 = [1, 2, 3, 4];
// const a2 = [5, 6, 7, 8];

// const result = a1.concat(a2); // return new array with elements of a1 followed by elements of a2

// console.log(result);

const x = [1, 2, 3, 4, 5, 6, 7];

const s = x.slice(2, 6); // to fetch data from the start to end - 1
console.log(s);

const str = x.join(" , "); // to club all the elements together to form a string seperated by a given char
console.log(str);

// const rev = x.reverse(); // reverse the order or the elements inside the array
// console.log(rev);

console.log(x.indexOf(3));

// array.splice(start, deletecount, i1, i2, ....)

const removed = x.splice(2, 2, 0, 0);
console.log(x, removed);
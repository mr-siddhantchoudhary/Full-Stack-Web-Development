function removeDuplicates(arr) {
    return [...new Set(arr)];
}


const arr = [1, 2, 3, 3, 5, 6, 7, 8, 45, 3, 5, 6];

console.log(removeDuplicates(arr));
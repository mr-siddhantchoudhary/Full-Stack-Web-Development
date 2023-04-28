function extractElements(arr) {
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];   
}

const arr = [1, 2, 4, 5, 6, 7, 8, 9];
const extracted = extractElements(arr);
console.log(extracted);
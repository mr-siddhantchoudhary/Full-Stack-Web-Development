function convertToNumber(num_string) {
    try {
        const num = Number(num_string);
        if (isNaN(num)) {
            throw new Error("Invalid number");
        }
        return num;
    } catch(error) {
        return "Invalid number";
    }
}


console.log(convertToNumber("123"));
console.log(convertToNumber("onetwothree"));
// function highestMarks() {
//     let arr = [15, 20, 30, 16, 11];
//     let temp = 0;
//     for ( i in arr ) {
//         if (temp < arr[i]) {
//             temp = arr[i];
//         }
//     }
//     return temp;
// };




function highestMarks() {
    let arr = Array();
    arr.push(document.getElementById("first").value);
    arr.push(document.getElementById("second").value);
    arr.push(document.getElementById("third").value);
    arr.push(document.getElementById("fourth").value);
    arr.push(document.getElementById("fifth").value);
    let temp = 0;
    let result;
    for (i in arr) {
        result = temp < arr[i] ? temp = arr[i] : temp;
    }
    console.log("Highest Marks: " + result);
    document.getElementById("resultPara").innerText = "Highest Marks: " + result;
}
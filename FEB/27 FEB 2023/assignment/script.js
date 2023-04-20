// reset function for "Reset Value" Button
function reset() {
    document.getElementById("counterBlock").value = 0;
}

//putting function on Reset Value button
resetBtn = document.getElementById("resetValue");
// console.log(resetBtn);
resetBtn.addEventListener("click", reset);



//........................................................

//funtion to decrese the value in counter
function decrement() {
    document.getElementById("counterBlock").value = --(document.getElementById("counterBlock").value);
}

//putting eventlistiner on decrementby1 button 
const decrBy1 = document.getElementById("decrementBy1");
decrBy1.addEventListener("click", decrement);

//.......................................................

//function to increse the value in counter
function increment() {
    document.getElementById("counterBlock").value = ++(document.getElementById("counterBlock").value);
}

const incrBy1 = document.getElementById("incrementBy1");
incrBy1.addEventListener("click", increment);
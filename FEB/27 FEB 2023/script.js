// Hex Code

// # 0123456789 ABCDEF

// const btn = document.getElementById("button")

const btn = document.getElementsByTagName("button");

console.log(btn);

const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";

    for(let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    console.log(cons);
    return cons;
}

function colorRandomChanger() {
    document.body.style.backgroundColor = randomColor();
}


btn[0].addEventListener("click", colorRandomChanger);
//loops

// for(init, condition, changer){
//     //code we want to iterate
// }

// for (let index = 0; index < 5; index++) {
//     console.log(`Index Value is ${index}`);
    
// }

// for (let index = 0; index < 5; index++) {
//     console.log(`${index} * ${index} = ${index * index}`);
    
// }

const heros = ["superman", "naagraj", "batman", "flash", "thor"];

// for (let index = 0; index < heros.length; index++) {
//     const element = heros[index];
//     console.log(`Heros is ${element}`);
    
// }
// let anotherHeros = [];
// for (let index = 0; index < heros.length; index++) {
//     // let anotherHeros = [];
//     const element = heros[index];
//     console.log(`Heros is ${element}`);
//     anotherHeros.push(element.toUpperCase());
    
// }

// console.log(anotherHeros);

let i = 0;

// while (i < 5) {
//     console.log(`Value is ${i}`);
//     //i = i + 1;
// }

// do {
//     console.log(`Value is ${i}`);
//     i++;
// } while (i < 5);


// for (const element of heros) {
//     console.log(`Hero is ${element}`);
// }

const languages = ["python", "java", "javaScript", "rust", "cpp"];

// for (const lan of languages) {
//     console.log(`Language is ${lan.toUpperCase()}`);
// }

// for (let i = 0; i < languages.length; i++) {
//     if (i == 2){break}
//     const lan = languages[i];
//     console.log(`New Language is ${lan}`);
// }

for (let i = 0; i < languages.length; i++) {
    if (i == 2){continue}
    const lan = languages[i];
    console.log(`New Language is ${lan}`);
}
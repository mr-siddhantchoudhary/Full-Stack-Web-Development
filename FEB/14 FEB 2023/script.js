// console.log(this);

// non primitive data types: Array [] and Object {}

// &&(AND) , ||(OR)
// && -> Both side condition should be true
// || -> Even if one side is true, we will get true as a result


// let isLoggedIn = false;
// let cardDetails = true;

// console.log("Allow purchase: ", isLoggedIn || cardDetails);

// let userDetails = {};

// return(userDetails && <>LogIN</>)

// let gmailLogin = true;
// let githublogin = true;
// let twitterlogin = true;

// console.log("Allow user to login: ", githublogin || gmailLogin || twitterlogin);

// conditionals

// if, else, elseif, nested else if else

// let age = 0;

// if (age >= 18){
//     console.log("You can vote in election");
// }

// let userDetails = null;

// if (userDetails) {
//     console.log("User is logged in");
// } else {
//     console.log("Please login first");
// }

// Traffic light example

// let trafficLight = "red"

// if (trafficLight === "red"){
//     console.log("Stop");
// } else if (trafficLight === "yellow"){
//     console.log("yellow");
// } else if (trafficLight === "green"){
//     console.log("green");
// } else{
//     console.log("Signal is broke. Save yourself!");
// }

// let role = "superuser";

// switch (role) {
//     case "admin":
//         console.log("you are a admin")
//         break;
//     case "user":
//         console.log("you are a normal usr")
//         break;
//     case "superuser":
//         console.log("user are a super user")
//         break;
        
//     default:
//         break;
// }

// var x = (10 > 5) ? "somethign";
// console.log(x);

// let arr = [
//     "iPhone",
//     "Macbook Pro",
//     "Flower pot",
//     "Water Bottle",
//     "Mac Studio Mini",
//     "Watch",
//     "Tennis Ball",
//     "Mouse Pad",
//     "Keyboard",
//     "Lens",
// ];

// let studentRegistery = {
//     1: "Mithun",
//     2: "Alka",
//     3: "Anurag",
//     4: "Prabir",
//     5: "Shivam",
// };

/*
    OUTPUT:

    6 * 1 = 6
    6 * 2 = 12
    6 * 3 = 18
    6 * 4 = 24
    6 * 5 = 30
    6 * 6 = 36
    6 * 7 = 42
    6 * 8 = 48
    6 * 9 = 54
    6 * 10 = 60
*/


let number = 6;

for (let i = 1; i <= 10; i++){

    console.log(`${number} * ${i} = ${number * i}`);
}

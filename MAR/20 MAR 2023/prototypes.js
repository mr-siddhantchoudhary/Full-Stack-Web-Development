let myHeros = ["Thor", "Spiderman"];
let dcHeros = ["Batman", "Flash", "Superman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy Power is ${this.spiderman}`);
    }
};

Object.prototype.hitesh = function() {
    console.log('Hitesh is present in all Objects');
}

console.log(myHeros.hitesh());

Array.prototype.heyhitesh = function() {
    console.log('Hitesh says hello to Array');
}

// console.log(myHeros.heyhitesh());

const User = {
    name: 'top name',
    email: 'top@gmail.com'
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAAssistant = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User;

Object.setPrototypeOf(TeachingSupport, Teacher);


String.prototype.truelength = function() {
    console.log(`True Length is: ${this.trim().length}`);
}

console.log("hitesh    ".truelength());
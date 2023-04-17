// AnonFunction

let x = function(){
    console.log("Unnamed function");
}

x();

/*
    let variableName = function() {
        //Function Body
    };

//calling a Anonymus function

variableName();

*/


// Immediately invoked function execution (IIFE)

// variableName();

//IIFE

(function (name) {
    console.log("greetings", name);
})("Siddhant");
// // class Product {

// //     constructor(n, p, d){
// //         this.name = n;
// //         this.price = p;
// //         this.discount = d;
// //     }

// //     display() {
// //         console.log("Name of the Product is", this.name, "and price is", this.price);
// //     }

// //     discountedPrice() {
// //         let newPrice = this.price*(Math.floor(100-this.discount)/100);
// //         return newPrice;
// //     }
// // }

// // const i1 = new Product("iPhone", 100000, 10); //creating an object of a class, new Product(), Product() is a constructor, create an empty object in memory and assign it to the variable 'p'.
// // console.log(i1.discountedPrice());
// // const i2 = new Product("samsung s23", 60000, 10);
// // console.log(i2.discountedPrice());
// // console.log(i1, i2);


// //+++++++++++++++++++++++++++++++++++++++++++++++++
// // Class Constructor, Default Values with constructor

// class Product { // class is like a template

//     // constructor(){
//     //     console.log("plain constructor");
//     // }

//     constructor(n, p) {
//         console.log("Calling the constructor");
//         this.name = n; //  this keyword refers to the same empty object we created
//         this.price = p; // data members
//         return {x:10, y:20};
//     }

//     display() { // class methods are funtion, they represents behaviour -> member functions
//         console.log("Displaying a product", this.name, this.price);
//     }
// }


// const p = new Product("iPhone 14", 100000); //new -> creates an empty plain object
// console.log(p);
// // p.display();


// //+++++++++Function Constructor+++++++++++++

// // function Product2(n, p){
// //     this.name = n;
// //     this.price = p;
// //     return {x:10, y:20};
// // }

// // const p2 = new Product2("iphone 14", 100000);
// // console.log(p2);

// /* 
//     1. -> this in js is different than other languages
//     2. -> this keyword refers to the context from where we call the function -> is not applicable to arrow function
// */

// /**
//  * If you don't return anything, js returns the newly created Object
//  * If you return primitive, then also we get newly created Object
//  * If you return custom Object, then JS will return this custom Object not the newly created Object
//  */


// // const Product3 = function(n, p){
// //     this.name = n;
// //     this.price = p;
// // }

// // const p3 = new Product3("iphone 13", 100000);
// // console.log(p3);


// let obj = {
//     x:10, y:20,
//     display2 : function() {
//         console.log(this.x);
//     }
// }


// obj.display2();

//++++++++++++++++Class Methods and Properties with Initial Value+++++++++++

class Product {
    discount;
    #rating;
    #name;
    discription = "custom";
    constructor(n, p) {
        console.log("Calling the constructor");
        this.#name = n;
        this.price = p;
        this.#rating = 0;
    }

    static customMethod() {
        console.log("Calling the custom static method");
    }

    display() {
        console.log("Displaying a product", this.#name, this.price);
    }
}

const p = new Product("iphone 14", 100000);
// console.log(p);
// p.name = "samsung s30";
// console.log(p.name);

p.display();
console.log(p);

// Product.customMethod(); // can only be call using the class name

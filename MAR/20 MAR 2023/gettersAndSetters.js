// class Product{
//     discount;
//     #rating = 99;
//     #name;
//     description = "custom";
//     constructor(n, p) {
//         console.log("calling the constructor");
//         this.#name = n;
//         this.price = p;
//     }

//     static customeMethod() {
//         console.log("Calling the custom static method");
//     }

//     getName() {
//         console.log(this.#name);
//     }

//     setName(newName) {
//         this.#name = newName;
//     }

//     get rate() {
//         console.log(this.#rating);
//     }

//     set rate(r) {
//         if(r < 0) return;
//         this.#rating = r;
//     }

//     display() {
//         console.log("displaying a product", this.#name, this.price, this.#rating);
//     }
// }

// const p = new Product("iPhone 14", 10000);
// console.log(p);
// p.display();
// p.getName();
// p.setName("Samsung s30");
// p.getName();

// p.rate;
// p.rate = 3;
// p.display();


//++++++++++++++   STACK   +++++++++++++++++++++++++

/**
 * 5
 * 4
 * 2
 * 1
 */

class Stack {
    #arr;
    constructor() {
        this.#arr = [];
    }

    push(x) {
        this.#arr.push(x);
    }

    pop() {
        this.#arr.pop();
    }

    top() {
        if(this.#arr.length == 0) return undefined;
        return this.#arr[this.#arr.length - 1];
    }
}

// const st = new Stack();
// st.push(10);
// st.push(20);
// console.log(st.top());
// st.push(30);
// st.push(40);
// st.pop();
// console.log(st.top());

// [1, 2, 3]

class complexNumber {
    #real;
    #imag;

    constructor(r, i) {
        this.#real = r;
        this.#imag = i;
    }

    get real() {
        return this.#real;
    }

    get imag() {
        return this.#imag;
    }

    addComplexNumber(c) {
        this.#real += c.real;
        this.#imag += c.imag;
    }

    display() {
        console.log(this.#real, " + i", this.#imag);
    }
}


const c1 = new complexNumber(5, 3);
const c2 = new complexNumber(1, 2);

c1.addComplexNumber(c2);

c1.display();
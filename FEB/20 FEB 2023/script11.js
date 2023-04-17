// // what was the need of Objects

// let obj = {
//     id : 101,
//     name : 'Siddhant',
//     salary: 10000
// };

// console.log(obj);
// console.log(obj.id + " " + obj.name + " " + obj.salary);

// /////////////////////////
//  let emp = new Object();
//  emp.id = 102;
//  emp.name = 'sam';
//  emp.salary = 120000;
//  console.log(emp);

// function emp(a, b, c){
//     this.id = a;
//     this.name = b;
//     this.salary = c;
// };

// const e = new emp(101, 'Anita', 20000);

// console.log(e);











///// OBJECT METHODS

let emp = {
    id: 101,
    name: 'Alex',
    salary: 10000
};

//Object keys
const keys = Object.keys(emp)
// returns an array of an object's own keys

console.log(keys);

const values = Object.values(emp); // Object.values
console.log(values); // restuns a values of an object

//Object.entries
const entries = Object.entries(emp);
console.log(entries); // returns an array of an object own key values pairs

Object.seal(emp);

emp.id = 100;
console.log(emp);
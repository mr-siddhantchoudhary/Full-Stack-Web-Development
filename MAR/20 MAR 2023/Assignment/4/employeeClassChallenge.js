class Employee{
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }
}

const myEmployee = new Employee("Saniya", "Internal Designer", 50000);
console.log(myEmployee.getSalary());
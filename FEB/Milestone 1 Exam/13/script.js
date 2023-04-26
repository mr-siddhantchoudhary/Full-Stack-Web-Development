// A resturant wants to calculate the total bill for a table based on the cost of each dish and the number of people sharing it. They require a javascript function that takes in the cost of each dish and the number of people sharing it and returns an object that contains the total bill and the bill to be paid by each person in the group.

function calculateBillPerPerson(costPerDish, numberOfPeople) {
    const totalBill = costPerDish * numberOfPeople;
    const billPerPerson = totalBill / numberOfPeople;

    const result = {
        totalBill: totalBill,
        billPerPerson: billPerPerson,
    };

    return result
}


const costPerDish = 500;
const numberOfPeople = 5;

const result = calculateBillPerPerson(costPerDish, numberOfPeople);
console.log(result);
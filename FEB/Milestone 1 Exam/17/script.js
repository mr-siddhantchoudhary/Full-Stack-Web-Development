//Build a Banking Application
//A banking application needs to manage customer accounts and transactions. The user details is stored in an object with a keys name and balance. Wrtie functions usnig object methods to update a customer's account balance based on a deposit or withdrawal.'


// function deposit(account, amount) {
//     account.balance += amount;
//     console.log(`Deposit of Rs. ${amount} successful. New Balance is Rs. ${account.balance}.`);
// }


// function withdraw(account, amount) {
//     if (amount <= account.balance) {
//         account.balance -= amount;
//         console.log(`Withdrawal of Rs. ${amount} successful. New Balance is Rs. ${account.balance}.`);
//     } else {
//         console.log(`Withdrawal of Rs. ${amount} faild. Insufficient balance of Rs. ${account.balance}.`);
//     }
// }



const customer = {
    name: 'John Doe',
    balance: 5000,
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposit of Rs. ${amount} successful. New balance is Rs. ${this.balance}.`);
    }, 
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal of Rs. ${amount} successful. New balance is Rs. ${this.balance}.`);
        } else {
            console.log(`Withdrawal of Rs. ${amount} failed. Insufficient balance of Rs. ${this.balance}.`);
        }
    }
}

customer.deposit(1000);
customer.withdraw(3000);
customer.withdraw(5000);
function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street};
}

const person = {
    name: 'John Doe',
    address: {
        street: '123 Main st',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
};

const result = extractNameAndStreet(person);

console.log(result);
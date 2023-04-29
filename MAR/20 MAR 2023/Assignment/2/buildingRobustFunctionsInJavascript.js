function getPerson(personObj) {
    try {
        if (typeof personObj !== "object" || !personObj.hasOwnProperty("name") || !personObj.hasOwnProperty("age")) {
            throw new Error("Invalid parameter type");
        }
        return `Name: ${personObj.name}, Age: ${personObj.age}`;
    } catch (err) {
        return err.message;
    }
}


const obj = {
    name: 'siddhant'
};


console.log(getPerson(obj));


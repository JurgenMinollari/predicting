const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// Error: ReferenceError: name is not defined
console.log(name);
console.log(otherName);


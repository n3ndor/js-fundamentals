//problem 1 solution: Tesla, Mercedes
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
console.log(randomCar) // Tesla
console.log(otherRandomCar) // Mercedes


//problem 2 solution: referenceError
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name); //referenceError
console.log(otherName); //Elon, if there is no error


//problem 3 solution: 123456, undefined
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
console.log(password); //123456
console.log(hashedPassword); //undefined


//problem 4 solution: false, true
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
console.log(first == second); //false 2 != 5
console.log(first == third); //true 2 == 2

//problem 5 solution: take a look after console.log for each
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
console.log(key); //"value"
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5


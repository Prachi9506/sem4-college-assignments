// obj and array destructuring

// const user = {
//     firstName: 'Piyush',
//     lastName: 'Goel',
//     add: {
//         city: 'Meerut',
//         country: 'India'
//     }
// };

// let a = console.log(user.firstName);
// console.log(a);

// let { firstName, lastName, add: { city, country } } = user;

// console.log(firstName);

// let colors = ['red', 'green', 'blue','Yellow'];

// let [color1, color2,,color4] = colors;

// console.log(color1);
// console.log(color4);


// const student = {
//     name: 'Stu1',
//     age: 20,
//     city: 'Ghaziabad'
// }

// function display({ name, age, city }) {
//     console.log(`Name is ${name}, Age is ${age}, City is ${city}`);
// }
//display(student);

// const student1 = [1,2,3,4,5];
// const student2 = [6,7,8,9,10];
// const combined = [...student1, ...student2];
// console.log(combined);

// const obj1 = {a:1, b:2};
// const obj2 = {c:3, d:4};
// const mergedObj = {...obj1, ...obj2};
// console.log(mergedObj);

// function show(name, ...skills){
//     console.log(`Name is ${name}`);
//     console.log(`Skills are: ${skills.join(", ")}`);
// }
// show('Piyush', 'JavaScript', 'Python', 'C++');


function greet(name) {
    console.log(`Hello, ${name}!`);
    sayGoodbye();
    sayWelcome(name);
}
function sayGoodbye() {
    console.log('Goodbye!');
}
function sayWelcome(name) {
    console.log(`Welcome, ${name}!`);
}
greet('Piyush');

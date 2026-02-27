const students = {
    name: "Piyush",
    age: 21,
    city: "Meerut"  
}

const updatedStudents = {
    ...students,
    age: 22,
    country: "India"
};

console.log(updatedStudents);



let hobbies = ['Reading', 'Traveling', 'Coding', 'Gaming'];
const func = (name, ...hobbies) => {
    console.log(`Name: ${name}`);
    console.log(`Hobbies: ${hobbies}`);
}
func('Piyush', ...hobbies);
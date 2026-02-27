const promp = require('prompt-sync')();

const student = {
    id: 101,
    name: 'Piyush',
    course: 'B.Tech',
    address: {
        city: 'Meerut',
        country: 'India'
    },
    marks: [85, 90, 78, 92],
    addmissionStatus: true
};

function displaydata({ id, name, course, address: { city, country }, marks, addmissionStatus }) {
    function calculateAverage({ marks }) {
        let sum = 0;
        for (let i = 0; i < marks.length; i++) sum += marks[i];
        return (sum / marks.length);
    }
    console.log(`ID: ${id}`);
    console.log(`Name: ${name}`);
    console.log(`Course: ${course}`);
    console.log(`City: ${city}`);
    console.log(`Country: ${country}`);
    let avg = calculateAverage({ marks });
    if (avg >= 80) console.log(`Addmission status is confirmed`);
    else console.log(`Regular Addmission`);
}

displaydata(student);

let x = promp();


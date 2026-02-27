function sum(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

const obj1 = { a: 1, b: 2 };
const updatedObj = { ...obj1, b: 3, c: 4 };
console.log(updatedObj);

function display(a, b, c) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
}
const args = [1, 2, 3];
display(...args);

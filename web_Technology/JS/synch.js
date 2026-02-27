// console.log("1");

// function func1() {
//     for (let i = 0; i < 1e10; i++){}
// }
// func1();
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");


// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 20000);

// console.log("3");

function checklogin(callback) {
    setTimeout(() => {
        console.log("Checking login...");
        callback();
    }, 5000);
}

function checkcart(callback) {
    setTimeout(() => {
        console.log("Checking cart...");
        callback();
    }, 5000);
}

function checkout(callback) {
    setTimeout(() => {
        console.log("Checking out...");
        callback();
    }, 5000);
}

function placeorder(callback) {
    setTimeout(() => {
        console.log("Placing order...");
        callback();
    }, 5000);
}

checklogin(() => {
    checkcart(() => {
        checkout(() => {
            placeorder(() => {
                console.log("Order placed successfully!");
            });
        });
    });
});
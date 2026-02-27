const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({ username: "sakshi", id: 123 });
        } else {
            reject("error: something went wrong");
        }
    }, 3000);
});

async function consumePromiseOne() {
    try {
        const response = await promiseOne;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseOne();

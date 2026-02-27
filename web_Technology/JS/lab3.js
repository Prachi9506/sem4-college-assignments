const check = false;   
const promise = new Promise(function(res, rej) {
    setTimeout(() => {
        if(check){
            res({ name: "Payal", id: 111 });
        }
        else{
            rej("validation failed");
        }

    }, 2000);

});


promise
.then((res) => {
    console.log("Success:)");
    console.log(`Name: ${res.name}, ID: ${res.id}`);
})
.catch((err) => {
    console.log("Error:(");
    console.log(err);
});
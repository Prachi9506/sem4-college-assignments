const promp = require('prompt-sync')();
let a = promp("Enter first number: ");
let b = promp("Enter second number: ");
let c = promp("Enter third number: ");  
let greatest = (a,b,c)  =>{
    if(a>=b && a>=c){
        return a;
    }
    else if(b>=a && b>=c){
        return b;
    }
    else return c;
}
console.log(`Greatest number among ${a}, ${b} and ${c} is ${greatest(a,b,c)}`);

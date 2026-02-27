const sos = (arr,sum) => {
    for(let i=0; i<arr.length; i++)
        if(arr[i]%2==0){
            console.log(arr[i]);
            sum += arr[i]*arr[i];
        }
    return sum;
}

let arr = [1, 2, 3, 4, 5];
console.log(sos(arr, 0));
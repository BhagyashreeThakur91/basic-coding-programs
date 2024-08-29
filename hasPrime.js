function hasPrime(arr){
    for(let i = 0; i<arr.length; i++){
        let check = isPrime(arr[i]);
        if(check){
            return true;
        }
    }
}

function isPrime(num){
    for(let i=2; i<=num-1; i++){
        if(num%i == 0){
            return false;
        }
        return true;
    }
}

const numsArr = [3,4,5];
console.log(hasPrime(numsArr));



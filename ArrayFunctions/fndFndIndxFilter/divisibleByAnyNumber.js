const arr = [1,2,3,4,5,6,7,8,9];
let x = 3;
let num = arr.find((n)=>{
    return divisibleByAnyNumber(n,x);
});
console.log("Find Number",num);

let fndIndex = arr.findIndex((n)=>{
    return divisibleByAnyNumber(n,x);
});

console.log("Find Index",fndIndex);

let filteredArr = arr.filter((n)=>{
    return divisibleByAnyNumber(n,x);
});
console.log('Filter Array',filteredArr);

function divisibleByAnyNumber(num, k){
    return num % k === 0;
}
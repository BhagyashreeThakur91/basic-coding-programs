const nums = [2,5,10,12,18,21];
let x = 12;
let fndNum = nums.find((n)=> {
    return greaterThanXNumber(n, x)
})
console.log(fndNum);

let fndIndex = nums.findIndex((n)=>{
    return greaterThanXNumber(n, x);
})
console.log(fndIndex);

let filteredArr = nums.filter((n)=>{
    return greaterThanXNumber(n, x);
})
console.log(filteredArr);

function greaterThanXNumber(num, comp){
    return num > comp;
}
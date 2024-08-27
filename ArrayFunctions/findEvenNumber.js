const nums = [7,9,11,24,25,12];
let evenNo = nums.find((num) => {
    return  num % 2 === 0;
})
console.log(evenNo);

let fndIndex = nums.findIndex((num)=>{
    return num % 2 === 0;
});
console.log(fndIndex);

let filteredArr = nums.filter((num)=>{
    return num % 2 === 0;
});

console.log(filteredArr);


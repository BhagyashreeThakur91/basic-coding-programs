const nums = [2,3,4];
let sum = nums.reduce((acc,curr)=>{
    return acc * curr; 
},1)
console.log(sum);

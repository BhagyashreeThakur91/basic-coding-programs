const nums = [2,3,4,5];
let sum = nums.reduce((acc,curr)=>{
    let cube = curr * curr * curr;
    return acc+cube;
},0)
console.log(sum);

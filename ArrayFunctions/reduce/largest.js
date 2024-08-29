const nums = [6,10,2,3,4,5,55,33,2];
let max = nums.reduce((acc,curr)=>{
    if(curr > acc)
        return curr;
    else
        return acc;
},0);
console.log(max);

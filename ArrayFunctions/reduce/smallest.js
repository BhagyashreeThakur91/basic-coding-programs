const nums = [2,3,4,5,6,1,22,44];
let smallest = nums.reduce((acc,curr)=>{
    if(curr < acc)
        return curr
    else 
        return acc;
})
console.log(smallest);

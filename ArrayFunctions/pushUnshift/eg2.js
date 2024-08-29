const nums = [2,3,4,10,11,12];
const newArr = [];
for(let i=0; i<nums.length; i++){
    if(nums[i]%3 != 0){
        newArr.push(nums[i]);
    }
}
console.log(newArr);

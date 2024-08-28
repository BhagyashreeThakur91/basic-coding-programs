const nums = [2,10,15,24,5,3];
const names = ['Jack','Bob','Mary'];

const nums1 = [...nums];
const names1 = [...names];

nums.push(22);
nums1.pop()

console.log(nums);
console.log('Copy', nums1);

console.log(names);
console.log('Copy', names1);




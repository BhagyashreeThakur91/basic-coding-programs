const arr = [1,2,3,4,5,6];
const arr1 = arr.map((n)=>{
    return isEven(n);
})
console.log(arr1);

function isEven(ele){
    return ele % 2 === 0;
}
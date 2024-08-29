const arr = [1,2,3,4,5,6];
const arr1 = arr.map((n)=>{
    return doubleNumber(n);
});

console.log(arr1);

function doubleNumber(ele){
    return 2 * ele;
}
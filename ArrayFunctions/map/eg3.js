const arr = ['Hello','Good','Hi','Bye'];
const maxLen = 3;
const arr1 = arr.map((a1)=>{
    if(a1.length <= maxLen)
        return a1;
    else
        return a1.substring(0,maxLen);
})
console.log(arr1);

 const arr = ['Jack','Mary','Anna','Bob'];
 let arr1 = arr.map((n)=>{
    let lastEle = n.length-1;
    return n[lastEle].toUpperCase();
 });
 console.log(arr1);
 
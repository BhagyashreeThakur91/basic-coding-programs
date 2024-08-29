const names = ['Jack','Tom','Ana','Bob','Julia'];
let val = names.reduce((acc,curr)=>{
    return acc + curr.length; 
},0);
console.log(val);

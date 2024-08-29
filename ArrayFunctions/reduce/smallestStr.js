const names = ['Steve','Bob','Ed','Jack','Ana'];
let smallStr = names.reduce((acc,curr)=>{
    if(curr.length < acc.length)
        return curr;
    else
        return acc      
});

console.log(smallStr);
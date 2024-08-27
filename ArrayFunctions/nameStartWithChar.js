const namesArr = ['Marry','Jack','Ana', 'Sam','Tim','Julia','John'];
const ch = 'J';

let fndName = namesArr.find((name)=>{
    return isStarting(name, ch);
});
console.log(fndName);

let fndIndex = namesArr.findIndex((name)=>{
    return isStarting(name, ch);
})
console.log(fndIndex);

let filteredArr = namesArr.filter((name)=>{
    return isStarting(name, ch);
});
console.log(filteredArr);

function isStarting(name, startWith){
    return name[0] === startWith;
}



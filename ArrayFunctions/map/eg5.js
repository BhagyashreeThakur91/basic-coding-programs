const names = ["Jack","Bob Smith","Ana Cook",'Tim'];
//Json with firstName and lastName
const arr = names.map((n)=>{
    return makeNameJson(n);
})
function makeNameJson(n){
    let json = {};
    let index = n.indexOf(" ");
    if(index < 0){
        json.firstName = n;
        json.lastName = "";
    } else {
        json.firstName = n.substring(0,index);
        json.lastName = n.substring(index+1);
    }
    return json;
}

console.log(arr);

const strs = ["Hi","Hello","X","Y"];
for(let i = 0; i<strs.length; i++){
    if(strs[i] == "Hello"){
        strs.splice(i,1);
        break;
    }
}
console.log(strs);

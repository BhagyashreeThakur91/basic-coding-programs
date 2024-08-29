const str = ["hi",'ball','CaB','Bye'];
let count = 0;

for(let i= 0; i<str.length; i++){
if(hasB(str[i])){
    count++;
}
}
console.log(count);

    

function hasB(str){
for(let i=0; i<str.length; i++){
    if(str[i] == 'B' || str[i]== 'b'){
        return true;
    }
}
return false;

}
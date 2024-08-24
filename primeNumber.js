let x = 29;
let y = 0;
for(let i = 2; i <= x/2; i++){
    if(x%i == 0){
        y = y + 1;
        break;
    }
}
if(y==0) {
    console.log(x, ": is a prime number");
} else{
    console.log(x,": is not a prime number");
}


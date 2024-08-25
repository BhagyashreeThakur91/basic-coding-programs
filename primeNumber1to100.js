for(let i=2; i<=100; i++){
    let y = 0;
    for(let j =2; j<i; j++){
        if(i%j == 0){
            y = y + 1;
            break;
        }
    }
    if(y==0){
        console.log(i);
    }
}
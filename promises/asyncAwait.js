function getData(getId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",getId);
            resolve("success");
        },2000)
    })
}

//async - await
async function getDataById(){
    await getData(1);
    await getData(2);
    await getData(3);
}

getDataById();
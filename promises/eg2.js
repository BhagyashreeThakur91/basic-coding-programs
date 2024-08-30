function getData(getId){
return new Promise((resolve,reject)=>{
 setTimeout(()=>{
    console.log("getData",getId);
    resolve("success");
 },2000)
})
}
getData(1)
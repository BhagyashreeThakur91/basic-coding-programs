//IIFE : Immediate Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined
function getData(getId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data ",getId);
            resolve("success");
        },2000)
    })
}

(async function (){
    console.log("fetching data 1");
    await getData(1);
    console.log("fetching data 2");
    await getData(2);
    console.log("fetching data 3");
    await getData(3);
})();
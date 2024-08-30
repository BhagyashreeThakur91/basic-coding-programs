function getPromise(){
    return new Promise((resolve,reject)=>{
        //console.log("I am a promise");
        //resolve("Success");
        reject("Some Error Occured")
    })
}

let promise = getPromise();
promise.then(()=>{
    console.log("Fulfilled");
}).catch((err)=>{
    console.log("Reject",err);
})

console.log(promise);

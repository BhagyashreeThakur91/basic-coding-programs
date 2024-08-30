function getData(getId,getNextData){
    setTimeout(()=>{
        if(getNextData){
            getNextData();
        }
        console.log("getData",getId);
    },2000)
}

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        });
    })
})


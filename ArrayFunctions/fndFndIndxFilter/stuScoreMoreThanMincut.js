const stData = [
    {name: 'Jack', marks1:33, marks2:25},
    {name: 'Bob', marks1:40, marks2:32},
    {name: 'Mary', marks1:41, marks2:40},
    {name: 'Tom', marks1:24, marks2:25},
    {name: 'Harry', marks1:30, marks2:35},
    {name: 'Anna', marks1:32, marks2:37},
]
let mincut = 59;

let finalResult = getStData(stData, mincut);
console.log(finalResult);


function getStData(arr,cut){
    //filter and then sort in desc
    let arr1 = arr.filter((st)=>{
        return (st.marks1 + st.marks2) > cut;
    });
    arr1.sort(compTotalDesc);
    return arr1;
}

function compTotalDesc(st1, st2){
    let t1 = st1.marks1 + st1.marks2;
    let t2 = st2.marks1 + st2.marks2;
    if(t1 > t2)
        return -1;
    else if(t1 < t2)
        return 1
    else
        return 0;
}
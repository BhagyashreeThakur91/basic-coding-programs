const products = [
    {name : 'Pepsi', qty:20, price:15},
    {name : 'Coke', qty:15, price:10},
    {name : 'Maggi', qty:10, price:12},
    {name : 'Colgate', qty:6, price:60},
    {name : 'Perk', qty:20, price:5},
];

const arr = products.map((p)=>{
    let v1 = p.qty * p.price;
    return {name : p.name, value:v1}
});
console.log(arr);

arr.sort(compDesc);
function compDesc(p1,p2){
    if(p1.value > p2.value)
        return -1;
    else if(p1.value < p2.value)
        return 1;
    else 
        return 0;
}

console.log(arr);

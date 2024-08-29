const prods = [
    {name:"Pepsi", qty:20,price:15},
    {name:"Coke", qty:2,price:15},
    {name:"Maggi", qty:10,price:15},
    {name:"Colgate", qty:6,price:60},
    {name:"Perk", qty:20,price:5},
];

let maxProd = prods.reduce((acc,curr)=>{
    let v1 = curr.qty * curr.price;
    let accVal = acc.qty * acc.price;
    if(v1 > accVal)
        return curr;
    else
        return acc;
})

console.log(maxProd.name);

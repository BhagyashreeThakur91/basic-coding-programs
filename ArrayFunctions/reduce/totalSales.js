const prods = [
    {name: "Pepsi", qty:20, price:1},
    {name: "Coke", qty:10, price:1},
    {name: "Maggi", qty:10, price:1},
    {name: "Colgate", qty:10, price:1},
    {name: "Perk", qty:20, price:1},
]
let totalSales = prods.reduce((acc,curr)=>{
    return curr.qty * curr.price + acc;
},0);
console.log(totalSales);

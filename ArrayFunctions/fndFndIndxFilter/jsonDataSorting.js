const salesData = [
    {name: 'Pepsi', qty:20, price:15},
    {name: 'Coke', qty:15, price:10},
    {name: 'Maggi', qty:10, price:12},
    {name: 'Colgate', qty:6, price:60},
    {name: 'Nescafe', qty:30, price:9},
];

//descending order of value - qty * price

salesData.sort(compValueDesc);
function compValueDesc(pr1,pr2){
    let v1 = pr1.qty * pr1.price;
    let v2 = pr2.qty * pr2.price;

    if(v1 > v2)
        return -1;
    else if(v1 < v2)
        return 1;
    else 
        return 0;
}

console.log(salesData);

const emps = [
    {name: "Jack", city:"Delhi", dept:"Tech"},
    {name: "Sam", city:"London", dept:"Tech"},
    {name: "John", city:"London", dept:"HR"},
    {name: "Ana", city:"Delhi", dept:"HR"},
    {name: "Tim", city:"Delhi", dept:"Tech"},
    {name: "Marry", city:"London", dept:"Tech"},
];
let city = "Delhi";
let dept = "Tech";

let fndEmp = emps.find((emp)=>{
    return emp.city === city && emp.dept === dept;
});
console.log(fndEmp);

let fndIndex = emps.findIndex((emp)=>{
    return emp.city === city && emp.dept === dept;
})
console.log(fndIndex);

let newArr = emps.filter((emp)=>{
    return emp.city === city && emp.dept === dept;
})
console.log(newArr);


const nums = [1,3,4,5,3,2,6];
const names = ['Jack','Bob','Tim'];
//console.log(nums.join(" @ "));
//console.log(names.join(" & "));

const nums2 = [...nums];
nums.sort(compNumbersDsc);

function compNumbersAsc(num1, num2){
    if(num1 > num2)
        return 1; // later
    else if(num1 < num2)
        return -1; // earlier
    else
        return 0; // same
}

function compNumbersDsc(num1, num2){
    if(num1 > num2)
        return -1; // earlier
    else if(num1 < num2)
        return 1; // later
    else
        return 0; // same
}

console.log("Decending Order",nums);




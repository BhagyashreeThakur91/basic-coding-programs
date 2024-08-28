const names = ['Jack','Tim','Anna','Steave','Ed'];
const copyNames = [...names];
//sort in ascending order of length

copyNames.sort(compLengthAsc);

function compLengthAsc(str1, str2){
    let len1 = str1.length;
    let len2 = str2.length;
    if(len1 > len2)
        return 1;
    else if(len1 < len2)
        return -1;
    else 
        return 0;
}

console.log(names);
console.log(copyNames);



const names = ['Jack','Tim','Anna','Mark'];
names.sort(compNamesDesc);
console.log(names);

// function compNamesDesc(name1, name2){
//     return name2.localeCompare(name1);
// }

function compNamesAsc(name1, name2){
    return name1.localeCompare(name2);
}

function compNamesDesc(name1, name2){
    return -1 * name1.localeCompare(name2);
}


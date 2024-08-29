const techs = ['C++','Python','Javascript'];
for(let i = 0; i<techs.length; i++){
    if(techs[i] == 'Javascript'){
        techs.splice(i+1,0,"Angular","React","Node");
        break;
    }
}
console.log(techs);

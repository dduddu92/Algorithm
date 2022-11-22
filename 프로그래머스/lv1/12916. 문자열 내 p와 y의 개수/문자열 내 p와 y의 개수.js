function solution(s){
const onlyP = s.toLowerCase().split('').filter(s=>s === 'p').length
const onlyY = s.toLowerCase().split('').filter(s=>s === 'y').length

if(onlyP === onlyY){
    return true;
} else if(onlyP !== onlyY){
    return false;
} else{
    return true;
}
}

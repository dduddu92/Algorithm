function solution(n) {
    const num = parseInt(Math.sqrt(n),10)
    if(num === Math.sqrt(n)){
        return Math.pow(num+1,2)
    }else{
        return -1;
    }
}

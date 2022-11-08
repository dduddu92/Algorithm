function solution(n) {
    const arr = [];
    for(let i=0;i<=n;i++){
        if(n%i === 0){
         arr.push(i);
        }
    }
    const result = arr.reduce((a,b)=>{
        return a + b;
    },0)
   return result;
}
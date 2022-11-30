function solution(a, b) {
             let result = []
 if(a === b){
     return a;
 } else{
     for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
         result.push(i)
     }
  return result.reduce((acc,cur)=>acc+cur)
 }
}

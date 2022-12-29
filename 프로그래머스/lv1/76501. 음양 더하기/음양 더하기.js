function solution(absolutes, signs) {
    let result
 for(let i = 0; i<=absolutes.length;i++){
     if(signs[i] === false){
         absolutes[i] = absolutes[i] * -1
     }
 }
   
    result = absolutes.reduce((acc,arr)=> (acc + arr))
    return result
}
function solution(a, b) {
   let arr = []
   for(let i = 0; i<a.length; i++){
       arr.push(a[i]*b[i])
   }
    let result = arr.reduce((acc,cur)=>acc+cur)
    return result
}
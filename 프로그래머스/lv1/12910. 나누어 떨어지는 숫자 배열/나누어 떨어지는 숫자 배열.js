function solution(arr, divisor) {
let result = []
arr.forEach((num)=>{
    if(num%divisor === 0){
        result.push(num)
    }
})
    if(result.length === 0){
        result.push(-1)
    }
    return result.sort((a,b)=>a-b)
}
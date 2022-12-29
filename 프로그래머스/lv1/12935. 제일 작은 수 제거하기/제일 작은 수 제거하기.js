function solution(arr) {
    let minNum
    arr.reduce((acc,arr)=>{
      minNum =  Math.min(acc,arr)
        return minNum
    })
    return arr.length === 1 ? [-1] : arr.filter((num)=>minNum !== num)
}
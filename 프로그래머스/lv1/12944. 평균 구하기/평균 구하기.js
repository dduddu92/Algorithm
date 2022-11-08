function solution(arr) {
  const result = arr.reduce((prev,cur)=>{
      return prev + cur;
  })
    const averageValue = result / arr.length
    return averageValue;
}
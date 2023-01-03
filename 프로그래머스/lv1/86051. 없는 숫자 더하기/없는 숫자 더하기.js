function solution(numbers) {
    let result = []
    for(let i = 0; i<=9; i++){
        numbers.includes(i) === false && result.push(i)
    }
    return result.reduce((acc,cur)=> acc+cur,0)
    
}
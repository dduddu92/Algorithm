function solution(x) {
    
const harshad = x.toString().split('').map(Number).reduce((a,b)=>a+b)

return x%harshad === 0 ? true : false
}

function solution(s) {
let upperCase
   let lowerCase
   let result
    if(s.match(/[A-Z]/g) !== null){
upperCase = s.match(/[A-Z]/g).sort().reverse()
  lowerCase = s.match(/[a-z]/g).sort().reverse()   
     return result = [...lowerCase, ...upperCase].join('')
    } else{
        return result = s.match(/[a-z]/g).sort().reverse().join('')
    }
   
  return result
}
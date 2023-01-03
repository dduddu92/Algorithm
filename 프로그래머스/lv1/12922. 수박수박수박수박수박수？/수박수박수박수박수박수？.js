function solution(n) {
let text = ''
for(let i = 0 ; i<n; i++){
    i%2 === 0 ? text += '수' : text+='박'
}
    return text
}
function solution(s) {
 let arr = [...s].sort()
 let newArr=[]
for(let i=0;i<=arr.length;i++){
   arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]) && newArr.push(arr[i])
   
}
    return newArr.join('')
}
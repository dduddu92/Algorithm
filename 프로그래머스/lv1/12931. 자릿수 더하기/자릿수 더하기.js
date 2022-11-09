function solution(n)
{
    const stringNum = n.toString().split('').map(Number).reduce((a,b)=> a+b)
return stringNum;
}


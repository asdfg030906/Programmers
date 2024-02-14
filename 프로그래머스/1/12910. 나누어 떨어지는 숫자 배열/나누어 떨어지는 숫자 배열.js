function solution(arr, divisor) {
    const divideNumArr = arr.filter(num => num % divisor === 0)
    .sort((a,b)=>a-b)
    const answer = divideNumArr.length !== 0 ? divideNumArr : [-1] 
    return answer
}
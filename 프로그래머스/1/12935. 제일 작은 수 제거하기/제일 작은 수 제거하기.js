function solution(arr) {
  if(arr.length <= 1){
      return [-1]
  }
    
  const arrMin = Math.min(...arr)
    
  const filterArr = arr.filter((e) =>  e > arrMin)
    
    return filterArr
}
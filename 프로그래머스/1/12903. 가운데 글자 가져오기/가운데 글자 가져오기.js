function solution(s) {
    var answer = '';
    let sArr = s.split('')
    if(s.length % 2 === 0 ){
      answer =  `${sArr[s.length / 2 - 1]}${sArr[s.length / 2 ]}`
    }else{
      answer =   `${sArr[Math.floor(s.length / 2)]}`
    }
    
    return answer;
}
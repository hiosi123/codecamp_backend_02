
let arr = [89, 89, 92, 100,100,76]
let final = []
let answer = Array.from(arr)
answer.sort((a,b) =>b-a)

arr
answer = [...new Set(answer)]



for(let i=0; i<arr.length; i++) {
  for(let j=0; j<answer.length; j++) {
    if(arr[i] === answer[j]){
      final.push(j+1)
    }
  }
}

final

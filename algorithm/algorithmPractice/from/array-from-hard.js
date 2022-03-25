arr1 = [[1,2],[2,3]]
arr2 = [[3,4],[5,6]]
arr3 = Array.from({length:arr1.length}, (e,i) => [])
for(let i =0; i <arr1.length; i++){
  for(let j=0; j<arr1[i].length; j++){
    arr3[i][j] = (arr1[i][j] + arr2[i][j])
  }
}

arr3

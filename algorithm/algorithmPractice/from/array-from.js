a=3
b= -8
c = Math.abs(a-b) +1
let arr
if(a < b){
    arr = Array.from({length:c}, (c,i) => a+i)
}else {
    arr = Array.from({length:c}, (c,i) => b+i) 
}

arr.reduce((a,b) => a+b)
console.log('안녕하세요~~~');

function getToken() {
    const result = String(Math.floor(Math.random() * 100000)).padStart(6,'0')
    console.log(result)
}

getToken()

// 스코프 체인
// function add() {
//     const a=3
//     const b=2
    
//     const result = a+b
//     return result
// }

//하나의 함수는 하나의 기능만
//console.log('안녕하세요~~~');

function getToken(i) {
    if (i === undefined) {
        console.log('에러 발생!!! 갯수를 제대로 입력해 주세요');
        return;
    } else if (i <= 0) {
        console.log('에러 발생 !! 갯수가 너무 적습니다!!!');
        return;
    } else if (i > 10) {
        console.log('에러 발생 !! 갯수가 너무 많습니다!!!');
        return;
    }
    const result = String(Math.floor(Math.random() * (10 ** i))).padStart(i,'0')
    console.log(result)
}

getToken(12)



// 스코프 체인
// function add() {
//     const a=3
//     const b=2
    
//     const result = a+b
//     return result
// }

//하나의 함수는 하나의 기능만
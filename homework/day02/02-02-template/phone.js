//핸드폰 토큰 생성하는 API
export function checkValidationPhone(myphone) {
    if(myphone.length !==10 && myphone.length !==11){
        console.log('에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요');
        return false;
    } else {
        return true;
    }
}

export function getToken() {
    const i = 6;
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
    return result;
}

export function sendToken(myphone, result) {
    console.log(myphone + '번호로 인증번호' + result + ' 를 전송합니다!')
}


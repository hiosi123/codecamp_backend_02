function checkNumber(number) {
    if(number.includes('-') === false) {
        console.log('에러발생!!! 형식이 올바르지 않습니다!!!');
        return
    }

    const breakNumber = number.split('-')
    if(breakNumber[0].length !== 6 || breakNumber[1].length !== 7) {
        console.log('에러발생!!! 갯수를 제대로 입력해주세요!!!');
        return;
    }

 let arr = number.split('');
    arr.splice(arr.length-6, arr.length-1, '******');
    answer = arr.join('');
    console.log(answer);
   
        
}

checkNumber('012232-9929391')
//module 방식
import {checkValidationPhone, getToken,sendToken} from './phone.js'

//commonjs 방식
// const {checkValidationPhone} = require('./phone.js')

function createTokenOfPhone(myphone) {
// 1.핸드폰 번호를 제대로 입력했나?
    const isValid = checkValidationPhone(myphone)
    if(isValid) {
    // 2. 핸드폰 토큰 6자리 만들기
        const myToken = getToken()
    // 3.핸드폰에 토큰 보내주기
        sendToken(myphone,myToken)
    }

}

createTokenOfPhone('01012345678123132')
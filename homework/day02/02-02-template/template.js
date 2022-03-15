import {checkSocialNumber} from './ssNumberIndex.js'
import {checkValidationPhone} from './phone.js'
import {checkValidationEmail} from './emailIndex.js'
import {siteAddressCheck} from './siteAddressIndex.js'

function congratLogin(email, ssn, phoneNumber, myFavoriteSite) {
    
    if(checkSocialNumber(ssn) && checkValidationPhone(phoneNumber) && checkValidationEmail(email) && siteAddressCheck(myFavoriteSite) ) {
    

    const dic = new Object()
    dic['email'] = email
    dic['ssn'] = ssn
    dic['phoneNumber'] = phoneNumber
    dic['myFavoriteSite'] = myFavoriteSite
    console.log(`회원 가입을 축하합니다 개인 정보를 확인해주세요`, dic)
    }
}

congratLogin('hiosi@naver.com', '999999-1111111', '01999311883','www.google.com');
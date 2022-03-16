import {checkSocialNumber} from './ssNumberIndex.js'
import {checkValidationPhone} from './phone.js'
import {checkValidationEmail} from './emailIndex.js'
import {siteAddressCheck} from './siteAddressIndex.js'
import {getWelcomeTemplate,sendMail} from './templateIndex.js'

function congratLogin({name, age, email, ssn, phoneNumber, myFavoriteSite}) {
    
    if(checkSocialNumber(ssn) && checkValidationPhone(phoneNumber) && checkValidationEmail(email) && siteAddressCheck(myFavoriteSite) ) {
        
        const welcome = getWelcomeTemplate(name, age, ssn, email, phoneNumber, myFavoriteSite)

        sendMail(email, welcome)
    }
}


const myInfo = {
    name: "신홍석",
    age: 100,
    email: 'hiosi@naver.com',
    ssn: '999999-1111111',
    phoneNumber: '01020311883',
    myFavoriteSite:'www.google.com'
}
congratLogin(myInfo)

import {checkDash,checkLength,hideNumber} from './ssNumber.js'


export function checkSocialNumber(number) {
    if (checkDash(number) && checkLength(number)) {
        hideNumber(number)
        return true
    }
}




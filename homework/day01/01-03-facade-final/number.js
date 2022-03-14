import {checkDash,checkLength,hideNumber} from './checking.js'


function checkSocialNumber(number) {
    if (checkDash(number) && checkLength(number)) {
        hideNumber(number)
    }
}

checkSocialNumber('920324-1038293')


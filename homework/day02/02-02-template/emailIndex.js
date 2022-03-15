import {includesAt} from './email.js'

export function checkValidationEmail(email) {
    if(includesAt(email)) {
        return true
    }
    
}
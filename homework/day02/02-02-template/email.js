

export function includesAt(email) {
    if (email.includes('@') === false){
        console.log('이메일 형식이 올바르지 않습니다')
        return false
    } else {
        return true
    }
}
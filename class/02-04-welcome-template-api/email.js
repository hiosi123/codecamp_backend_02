import {getToday} from './utils.js'

export function checkAtEmpty(email) {
    if (email.includes('@') === false || email === ''){
        console.log('이메일 형식이 올바르지 않습니다')
        return false
    } else {
        return true
    }
}

export function getTemplate(name, age, school, email, password) {
    return `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다!!!</h1>
            <hr />
            <div>이름: ${name}<div/>
            <div>나이: ${age}살<div/>
            <div>학교: ${school}</div>
            <div>이메일: ${email}</div>
            <div>패스워드: ${password}</div>
            <div>오늘 날짜: ${getToday()}<div/>
        <body/>

    </html>
    `
}

export function sendEmail(email,template) {
    console.log(`${email} 로 ${template} 을 보냅니다`)
}



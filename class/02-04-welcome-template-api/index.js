import {checkAtEmpty, sendEmail,getTemplate} from './email.js'



function createUser({name, age, school, email, password}) {

    //1. 이메일이 정상인지 확인(1- 존재여부, 2- 골뱅이가 포함되어 있어야 한다)
    if (checkAtEmpty(email)) {

    //2. 가입환영 템플릿 만들기
    const template = getTemplate(name, age, school, email, password)

    //3. 이메일에 가입환영 템플릿 전송하기
    sendEmail(email, template)

    }

}

const myuser = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
    email: 'hiosi@naver.com',
    password: '1234'
}
createUser(myuser)
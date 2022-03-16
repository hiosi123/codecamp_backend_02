function getWelcomeTemplate({myname, myage, myschool}) {

    // 여기서 오늘 날짜로 만들기!!
    let today = new Date()
    const yyyy = today.getFullYear()
    const mm = String(today.getMonth() + 1).padStart(2,'0')
    const dd = String(today.getDate()).padStart(2,'0')
    const createdAt = `${yyyy}-${mm}-${dd}`

    return `
        <html>
            <body>
                <h1>${myname}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${myname}<div/>
                <div>나이: ${myage}살<div/>
                <d>학교: ${myschool}</d
                iv>
                <div>가입일: ${createdAt}</div>
            <body/>

        </html>
    `
}

const myuser ={
    myname: '철수',
    myage: 13,
    myschool: '다람쥐초등학교',
}

console.log(getWelcomeTemplate(myuser))


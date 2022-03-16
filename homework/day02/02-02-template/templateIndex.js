
export function sendMail(email, template) {
    console.log(`${email}로 ${template}을 전송합니다`)
}


export function getWelcomeTemplate(name, age, ssn, email, phoneNumber, myFavoriteSite) {

    // 여기서 오늘 날짜로 만들기!!
    let today = new Date()
    const yyyy = today.getFullYear()
    const mm = String(today.getMonth() + 1).padStart(2,'0')
    const dd = String(today.getDate()).padStart(2,'0')
    const createdAt = `${yyyy}-${mm}-${dd}`

    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${name}<div/>
                <div>나이: ${age}살<div/>
                <div>주민번호: ${ssn}</div>
                <div>이메일: ${email}</div>
                <div>전화번호: ${phoneNumber} </div>
                <div>관심사이트: ${myFavoriteSite}</div>
                <div>가입일: ${createdAt}</div>
            <body/>

        </html>
    `
}


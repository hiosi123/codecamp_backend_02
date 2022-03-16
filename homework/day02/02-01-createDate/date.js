
let today = new Date()
const yyyy = today.getFullYear()
const mm = String(today.getMonth() + 1).padStart(2,'0')
const dd = String(today.getDate()).padStart(2,'0')
const hour = String(today.getHours()).padStart(2,'0')
const min = String(today.getMinutes()).padStart(2,'0')
const sec= String(today.getSeconds()).padStart(2,'0')


console.log(`오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hour}:${min}:${sec} 입니다.`)
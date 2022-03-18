const express = require('express')
const app = express()
const port = 3001

// '/' 이거는 루트 이다, 관리자의 가장 시작되는 부분
// req 요청, res 응답 
app.get('/' , (req, res) => {
  res.send('Hello World!')
})

//누군가 접속 한다,
// 서버를 24시간동안 켜놓아야 계속 다른 사람들이 접속 할 수 있다
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
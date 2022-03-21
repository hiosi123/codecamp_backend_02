import {checkValidationPhone,getToken,sendToken} from './phone.js'
import express from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import {options} from "./swagger/config.js"
import cors from 'cors'

 // 만들어져있는 설정 파일
const app = express();
app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

const port = 3001

// '/' 이거는 루트 이다, 관리자의 가장 시작되는 부분
// req 요청, res 응답 


app.get('/boards' , (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {number: 1, writerL: "철수", title: "1제목입니다!!~~", contents: "1내용입니다"},
    {number: 2, writerL: "진희", title: "2제목입니다!!~~", contents: "2내용입니다"},
    {number: 3, writerL: "홍석", title: "3제목입니다!!~~", contents: "3내용입니다"},
  ]

  // 2. 꺼내온 결과 응답 주기
  res.send(result) 
})


app.post('/boards' , (req, res) => {
  //1.데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  // 프론트엔드로부터 데이터 받아오기
  // 콘솔로 찍기 확인 해보기
  console.log(req.body)
  //2.저장결과 알려주기!
  res.send('등록에 성공하셧습니다!')
})


app.post('/tokens/phone', (req, res) => {
  // 1.핸드폰 번호를 제대로 입력했나?
  const isValid = checkValidationPhone(req.body.phone)
  if(isValid) {
  // 2. 핸드폰 토큰 6자리 만들기
      const myToken = getToken()
  // 3.핸드폰에 토큰 보내주기
      sendToken(req.body.phone, myToken)
      res.send('인증완료')
  }
})


// app.get('/boards/:id' , (req, res) => {
//   res.send('Hello World!')
// })

// app.put('/boards/:id' , (req, res) => {
//   res.send('Hello World!')
// })

// app.delete('/boards/:id' , (req, res) => {
//   res.send('Hello World!')
// })


//누군가 접속 한다,
// 서버를 24시간동안 켜놓아야 계속 다른 사람들이 접속 할 수 있다
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
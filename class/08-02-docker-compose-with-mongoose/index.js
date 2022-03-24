import {checkValidationPhone,getToken,sendToken} from './phone.js'
import {checkAtEmpty, sendEmail,getTemplate} from './email.js'

import express from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import {options} from "./swagger/config.js"
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { Board } from './models/board.model.js';
dotenv.config()
 // 만들어져있는 설정 파일


const app = express();

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

const port = 3001

// '/' 이거는 루트 이다, 관리자의 가장 시작되는 부분
// req 요청, res 응답 


app.get('/boards' , async(req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  //findOne 철수 하나 불러와
  //find 모든 철수 불러와
  //Board.findOne({writer: "철수"}) 
  const result = await Board.find()

  // 2. 꺼내온 결과 응답 주기
  res.send(result) 
})


app.post('/boards' , async (req, res) => {
  //1.데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  // 프론트엔드로부터 데이터 받아오기
  // 콘솔로 찍기 확인 해보기
  //...req.body
  
  const board = new Board({
  ...req.body
  })

  await board.save()
  
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

//회원등록
app.post("/users",(req, res) => {
  const myuser = req.body.user
  console.log(myuser)
   //1. 이메일이 정상인지 확인(1- 존재여부, 2- 골뱅이가 포함되어 있어야 한다)
   if (checkAtEmpty(myuser.email)) {

    //2. 가입환영 템플릿 만들기
    const template = getTemplate(myuser)

    //3. 이메일에 가입환영 템플릿 전송하기
    sendEmail(myuser.email, template)
  }
  res.send('전송완료')
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

//d
mongoose.connect("mongodb://my-database:27017/myDocument")

//누군가 접속 한다,
// 서버를 24시간동안 켜놓아야 계속 다른 사람들이 접속 할 수 있다
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
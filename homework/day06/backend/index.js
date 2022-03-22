import {checkValidationPhone,getToken,sendToken} from './phone.js'
import {checkAtEmpty, sendEmail,getTemplate} from './email.js'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import {options} from "./swagger/config.js"
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config() 

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));


const port = 3000

app.get('/users', (req, res) => {
    const user = [
        {email: "hiosi@naver.com",name:"Simon",phone: "01020311883",personal: "912222-1111111",prefer: "https://google.com"},
        {email: "hiosi1@naver.com",name:"Selly",phone: "01010311883",personal: "912222-1111112",prefer: "https://google.com"},
        {email: "hiosi2@naver.com",name:"Rock",phone: "01023311883",personal: "912222-1111113",prefer: "https://google.com"},
        {email: "hiosi3@naver.com",name:"Paper",phone: "01040311883",personal: "912222-1111114",prefer: "https://google.com"},
        {email: "hiosi4@naver.com",name:"Scissors",phone: "01520311883",personal: "912222-1112111",prefer: "https://google.com"},
    ]
    res.send(user)
})



app.get('/starbucks', (req,res) => {
    const coffee = [
        {name: "americano", kcal: 5},
        {name: "green tea latte", kcal: 76},
        {name: "latte", kcal: 40},
        {name: "tripple shot americano", kcal: 10},
        {name: "frappochino", kcal: 300},
        {name: "monster coffee", kcal: 10000},
        {name: "icecream", kcal: 200},
        {name: "tea", kcal: 5},
        {name: "americano1", kcal: 10},
        {name: "americano2", kcal: 10},
      
    ]
    res.send(coffee)
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





app.listen(port)
// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  const number = document.getElementById("PhoneNumber01").value + document.getElementById("PhoneNumber02").value + document.getElementById("PhoneNumber03").value
  console.log(number)

  const result = await axios.post("http://localhost:3000/tokens/phone", {
    phone: number
  }).then((res) =>{
    console.log(res)
    document.getElementById('TokenInput').innerText = res.data
  })
  console.log(result)
  console.log('인증 번호 전송')
}



// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value
  const personal = document.getElementById("SignupPersonal").value
  const phoneNum = document.getElementById("PhoneNumber01").value + document.getElementById("PhoneNumber02").value + document.getElementById("PhoneNumber03").value
  const mySite = document.getElementById("SignupPrefer").value
  const password = document.getElementById("SignupPwd").value
  const email = document.getElementById("SignupEmail").value
  console.log('회원 가입 이메일 전송')
  
  const result = await axios.post("http://localhost:3000/users", {
    user: {
      name: name,
      personal: personal,
      phoneNum: phoneNum,
      mySite : mySite,
      password : password,
      email : email
    }
  }).then((res) =>{
    console.log(res)
    
  })
  console.log(result)
  console.log('인증 번호 전송')
}

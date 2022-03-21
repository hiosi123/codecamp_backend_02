import axios from 'axios'

// 비동기 방식
function fetchPost() {
    const result = axios.get("https://koreanjson.com/posts/1")
    console.log('==========================')
    console.log(result) //Promise{ <pending> }
    console.log('==========================')
}

fetchPost() // 실행명령


// 동기 방식
async function fetchPost2() {
    
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log('==========================')
    console.log(result) //Promise{ <pending> }

    console.log('==========================')
    console.log(result.data.title)
}

fetchPost2() // 실행명령

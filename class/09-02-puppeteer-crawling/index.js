import puppeteer from "puppeteer"
//크롤링 위법사례 https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/

async function startCrawling(){
    const browser = await puppeteer.launch({ headless:false }) //브라우저가 안보이게 만듬 headless:true 로 하면 더 빠르게 실행이 됨
    const page = await browser.newPage() // 페이지를 연다
    await page.setViewport({ width: 1280, height: 720}) // 페이지의 사이즈 설정
    await page.goto("https://www.goodchoice.kr/product/search/2") //여기 페이지로 이동
    await page.waitForTimeout(1000)

    //뽑아 오고 싶은 정보를 찾아옴
    const stage = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span", 
        (el) => el.textContent
    )
    await page.waitForTimeout(1000)

    const location = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
        (el) => el.textContent
    )
    await page.waitForTimeout(1000)

    const price = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",
        (el)=> el.textContent
    )
    await page.waitForTimeout(1000)
    
    console.log(stage)
    console.log(location.trim())
    console.log(price)

    await browser.close()
}

startCrawling()
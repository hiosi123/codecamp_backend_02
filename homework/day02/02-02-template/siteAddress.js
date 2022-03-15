export function checkSiteStartEnd(myFavoriteSite) {
    let add = myFavoriteSite.split('.')
    if (add[0] !== 'www' || add[2] !== 'com'){
        console.log('웹사이트 주소 형태를 확인해 주세요!!')
        return false
    } else {
        return true
    }
}
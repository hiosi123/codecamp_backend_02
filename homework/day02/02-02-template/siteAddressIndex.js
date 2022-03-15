import {checkSiteStartEnd} from './siteAddress.js'


export function siteAddressCheck(myFavoriteSite) {
    if(checkSiteStartEnd(myFavoriteSite)) {
        return true
    }
}
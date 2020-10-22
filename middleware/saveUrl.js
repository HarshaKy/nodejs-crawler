
let url = require('url')
const urlsController = require('../db/controllers/urlsController')
const urlCtrl = require('../db/controllers/urlsController')

const saveUrl = async (urlToSave) => {
    return new Promise(async (resolve, reject) => {
        try {
            let splitUrl = urlToSave.split('?')
            // console.log(splitUrl)
            let data = {}
            data.url = splitUrl[0]
            // data.refCount = 1
            splitUrl.shift()

            let urlParts = url.parse(urlToSave, true)
            let params = Object.keys(urlParts.query)
            data.params = params

            let urlFound = await urlCtrl.getUrlData({ 'url': data.url })
            if (urlFound.length) {
                // update urldata
                urlFound = urlFound[0]
                data.refCount = urlFound.refCount + 1
                await urlsController.updateUrlData(urlFound._id, data)
            } else {
                data.refCount = 1
                await urlsController.createUrlData(data)
            }
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = { saveUrl }
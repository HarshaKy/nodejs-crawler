
const urls = require('../models/urls')

const getAllUrlsData = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await urls.find()
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

const getUrlData = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await urls.find(query)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

const updateUrlData = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await urls.updateOne({ '_id': id }, { '$set': data }, { '$new': true })
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

const createUrlData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let urlData = new urls(data)
            urlData.save().then((doc) => resolve(doc)).catch(err => {
                if(err.name == "MongoError" && err.code == 11000) {
                    console.log('duplicate')
                    resolve([])
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getUrlData,
    updateUrlData,
    createUrlData,
    getAllUrlsData
}
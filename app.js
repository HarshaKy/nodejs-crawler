require('./db/config/config')
require('./db/db')
const express = require('express')
const { crawl } = require('./crawler/crawler')
const urlCtrl = require('./db/controllers/urlsController')
const urls = require('./db/models/urls')

let app = express()
const port = 3000
const href = `http://localhost:${port}/api/v1/crawledUrls`

app.get('/', async (req, res) => {
    // await urls.remove({})
    crawl()
    res.send(`Crawling has begun. Visit <a href=${href}>${href}</a> to see the results`)
})

app.get('/api/v1/crawledUrls', async (req, res) => {
    let urlDataJson = await urlCtrl.getAllUrlsData()
    if(urlDataJson.length) {
        res.json(urlDataJson)
    } else {
        res.send('please come back after a few seconds')
    }
    
})

app.listen(port, () => {
    console.log('listening on port', port)
})
const express = require('express')
const { crawl } = require('./crawler/crawler')

let app = express()
const port = 3000
const href = `http://localhost:${port}/api/v1/crawledUrls`

app.get('/', (req, res) => {
    crawl()
    res.send(`Crawling has begun. Visit <a href=${href}>${href}</a> to see the results`)
})

app.listen(port, () => {
    console.log('listening on port', port)
})
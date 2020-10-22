const request = require('request')
const cheerio = require('cheerio')

let urlsToCrawl = []
let crawlCount = 0
const crawlLimit = 5
const maxCrawl = 10000000

urlsToCrawl.push('https://medium.com/')

let allUrls = []

const crawl = () => {

    const url = urlsToCrawl.shift()

    crawlCount++

    request(url, (error, response, html) => {
        if (!error) {

            const $ = cheerio.load(html)

            let arr = []

            $('a').filter(function(output) {
                let data = $(this)
                arr.push(data.attr().href)
            })

            let uniqueUrls = removeDuplicates(arr)
            for (let url of uniqueUrls) {
                if (urlsToCrawl.indexOf(url) === -1 && isURL(url)) {
                    urlsToCrawl.push(url)
                    console.log(url)
                }
            }
            while (urlsToCrawl.length && crawlCount < crawlLimit) {
                crawl() 
            }
            crawlCount--
        } else {
        	console.log(error)
        }
    })
}

function removeDuplicates(arr) {
    var uniqueLinks = []

    arr.forEach(element => {
        if (allUrls.indexOf(element) === -1) {
            uniqueLinks.push(element)
            allUrls.push(element)
        }
    })

    return uniqueLinks
}

function isURL(url){
    let pattern = 'https://medium.com'
    pattern = new RegExp(pattern)
    return pattern.test(url)
}

module.exports = { crawl }
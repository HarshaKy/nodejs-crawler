# Web Crawler using Node.js

## Pre-requisites

1. Install [nodejs](https://nodejs.org/en/)
2. Install [node package manager cli](https://docs.npmjs.com/cli/install)
3. Install and run [mongodb](https://docs.mongodb.com/manual/installation/) to store the crawled URLs and parameters.

## Installation

Once you have cloned / downloaded the project, head into the root directory of the project. Then run the following commands:

```cmd
npm install
npm start
```
If you want to run the app in development mode, run the following commands
```cmd
npm i nodemon -g
npm run dev
```

This will start the app on port 3000. You can visit [http://localhost:3000](http://localhost:3000) to see that your app is running. Visiting this page will trigger the crawl() function to start crawling Medium.com.

![alt text](https://github.com/HarshaKy/nodejs-crawler/blob/main/img/app.png?raw=true)

The port will be set to 3000 by default. However, you can change it to a port of your choice. 

After a few seconds, if you click on the link [http://localhost:3000/api/v1/crawledUrls](http://localhost:3000/api/v1/crawledUrls), you should be able to see the results. It will list out the crawled URLs in [JSON](https://www.json.org/json-en.html) format. 

![alt text](https://github.com/HarshaKy/nodejs-crawler/blob/main/img/apiCrawledUrls.PNG?raw=true)

## Folder Structure

```
root
|──crawler
|    └──crawler.js
|──db
|   |──config
|   |    └──config.js
|   |──controllers
|   |    └──urlsController.js
|   |──models
|   |    └──urls.js
|   └──db.js
|──img
|──middleware
|   └──saveUrl.js
└──app.js 

```
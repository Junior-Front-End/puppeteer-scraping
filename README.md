# puppeteer-scraping
2022.05.13 | 
 
[Related Article](https://juniorfrontend.ir/%d9%88%d8%a8-%d8%a7%d8%b3%da%a9%d8%b1%d9%be%db%8c%d9%86%da%af-puppeteer/)

[Github repo](https://github.com/Junior-Front-End/puppeteer-scraping)


## Run 

1. if you are in Iran use `psiphon3`
2. hit `npm start`
3. go to `localhost:3000` and insert likee ID: `123456789` 
4. wait to see the avatar and name

## Heroku Deploy 

put this: 
```
const browser = await puppeteer.launch({ 
    args: ['--no-sandbox'] 
});
```

then read [package](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-on-heroku
)!

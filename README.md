# bigo Likee scraping (v1.4)
2022.05.05 

## in this branch (v1.4)

* adding likee scraping

## test data

* bigo: 832270131
* likee: 123456789 

### Heroku Deploy 

put this: 
```
const browser = await puppeteer.launch({ 
    args: ['--no-sandbox'] 
});
```

then read [package](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-on-heroku
)!

const express = require("express")
const puppeteer = require('puppeteer'); 
const path = require("path"); 
var app = express()


//
app.use(express.static("server/public"))


//
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + 'public/index.html'))
})


//
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}


//
app.get('/likeeid', (req, res) => {

  //
  var likeeid = req.query.id  
  if (!likeeid) return res.json({message: "pls insert id!"})
  console.log(likeeid);
 

  //
  (async () => {


    // 
    const browser = await puppeteer.launch({ 
      args: ['--no-sandbox'] , 
    });
    

    //
    const page = await browser.newPage();
 
    //
    var url = 'https://likee.video/pay';
    var option = {waitUntil: 'networkidle0'}

    try {
      await page.goto(url, option);
    } catch (error) {
      console.log(error);
      return res.json({message: "Error! Try again!"});
    }
     
    //
    await page.waitForSelector("div.guide-box-content-button[data-v-4fbb8014]");
    await page.click('div.guide-box-content-button');  
    await page.waitForSelector("div.guide-box-content-button[data-v-e01f951a]");
    await page.click('div.guide-box-content-button');  
    await delay(150) 
    await page.type('div[data-v-4fbb8014] input', likeeid); 
    await page.click('div[data-v-4fbb8014] button'); 
    // await page.waitForSelector('img.both-center', {visible: true}); 
    await page.waitForSelector('div.toast , div.user-info-box div.name', {visible: true});  

    // await page.screenshot({path: "./screenshot.png"});

    //   
    const scrapedData = await page.evaluate(() => {
 
      let nameEl = document.querySelector('div.user-info-box div.name');
      let name = nameEl ? nameEl.innerText : null;
      if (!name) return ({message: "ID Not Found!"});
      
      let avatarURL = document.querySelector('div.user-info-box img').getAttribute("src");
      return ({avatarURL, name});

    });
 
    //
    await page.close(); 
    await browser.close();
    return res.json(scrapedData);

  })();


});



//
app.listen(process.env.PORT || 3000)

const puppeteer = require('puppeteer')
const  helper =require('./helper') 


test('should return false because user input is empty', ()=>{
    const result = helper.validator('' , true , true)
    expect(result).toBe(false)
})


test('should return true', ()=>{
    const result = helper.validator('shirin' , false , true)
    expect(result).toBe(true)
})



test('should return false because age input is not a number', ()=>{
    const result = helper.validator('shirin' , true , true)
    expect(result).toBe(false)
})



test('should return [user name is shirin,and age 30]', ()=>{
    const result = helper.joiner('shirin' , '30' )
    expect(result).toBe('user name is shirin,and age 30')
})


test('should show element after adding write data and click button ' , async()=>{
    const browser = await(puppeteer.launch({
        headless:false,
        slowMo:200,
        args:['--window-size=1920,1080']
    }))
    const page = await browser.newPage()
    await page.goto('http://localhost:5500/index.html')
    await page.click('input#userNameInp')
    await page.type('input#userNameInp' , 'shirin')
    await page.click('input#userAgeInp')
    await page.type('input#userAgeInp' , '30')
    await page.click('button#addBtn')
    const textResult = await page.$eval('#userList' , el => el.textContent)
    expect(textResult).toBe('user name is shirin,and age 30')
}, 20000)
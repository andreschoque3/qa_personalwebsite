// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const { format } = require('date-fns')

// get the current date and time
const formattedDateTime = format(new Date(), 'yyyy-MM-dd_HH-mm')


describe('[--------------- HomePageTest ---------------]', function() {
  this.timeout(70000)
  let driver

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
  })

  afterEach(async function() {
    await driver.quit();
  })
  it('homepage', async function() {
    await driver.get("https://andreschoque.com/")

    await driver.manage().window().setRect({ width: 1400, height: 800 })

    console.log('----------------------------')

    console.log('Home section:')

    await driver.findElement(By.linkText("Home")).click()

    await driver.sleep(3000)

    console.log("Clicking on 'Get started' button:")

    await driver.findElement(By.linkText("Get started")).click()

    await driver.sleep(3000)

    await driver.executeScript('window.scrollTo(0, 0);');

    await driver.sleep(3000)

    console.log('----------------------------')

    console.log('About section:')

    await driver.findElement(By.linkText("About")).click()

    await driver.sleep(3000)

    console.log('Clicking tab links:')

    await driver.findElement(By.css(".tab-links:nth-child(2) > strong")).click()

    await driver.sleep(2000)

    await driver.findElement(By.css(".tab-links:nth-child(3) > strong")).click()

    await driver.sleep(3000)

    console.log("Clicking 'Download resume' button:")

    await driver.executeScript('window.scrollTo(340, 700);');

    await driver.sleep(3000)

    await driver.findElement(By.css(".resume > .btn")).click()

    await driver.sleep(3000)

    await driver.executeScript('window.scrollTo(0, 0);');

    await driver.sleep(2000)

    console.log('----------------------------')

    console.log('Services section:')

    await driver.findElement(By.linkText("Services")).click()

    await driver.sleep(2000)

    await driver.executeScript('window.scrollTo(0, 0);');

    await driver.sleep(2000)

    console.log('----------------------------')

    console.log('Portfolio section:')

    await driver.findElement(By.linkText("Portfolio")).click()

    await driver.sleep(2000)

    console.log("Clicking 'View more' button:")

    await driver.findElement(By.id("view-more")).click()

    await driver.sleep(2000)

    console.log("Clicking 'hide' button:")

    await driver.findElement(By.id("hide")).click()

    await driver.sleep(2000)

    await driver.executeScript('window.scrollTo(0, 0);');

    await driver.sleep(2000)

    console.log('----------------------------')

    console.log('Contact section:')

    await driver.findElement(By.linkText("Contact")).click()

    await driver.sleep(2000)

    console.log("Creating contact form:")
    
    await driver.findElement(By.name("Name")).click()

    await driver.sleep(2000)

    await driver.findElement(By.name("Name")).sendKeys("Andres")

    await driver.sleep(2000)

    await driver.findElement(By.name("Email")).click()

    await driver.sleep(2000)

    await driver.findElement(By.name("Email")).sendKeys("andres@email.com")

    await driver.sleep(2000)

    await driver.findElement(By.name("Message")).click()

    await driver.sleep(2000)

    await driver.findElement(By.name("Message")).sendKeys("testing selenium date: " , formattedDateTime)

    await driver.sleep(2000)

    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');

    await driver.sleep(2000)

    console.log("Submitting contact form:")

    await driver.findElement(By.css(".btncv")).click()

    console.log('End of session:')

    console.log('----------------------------')

    console.log('[--------------- All test cases have been completed ---------------]')
  })
})

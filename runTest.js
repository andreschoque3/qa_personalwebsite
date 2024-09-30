// Sample code:

const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const mocha = require('mocha');
const { describe, it, before, after } = mocha;

describe('Button tests', function () {
    let driver;

    // Set timeout for Mocha to allow enough time for loading the page
    this.timeout(30000);

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async () => {
        await driver.quit();
    });

    it('should load the website and find the buttons', async () => {
        // Load the website
        await driver.get('https://andreschoque.com');

        // Wait until the button is present
        const button = await driver.wait(until.elementLocated(By.id('button-id')), 10000);

        // Check if the button is displayed
        const isDisplayed = await button.isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it('should click the button and check for a response', async () => {
        const button = await driver.findElement(By.id('button-id'));
        
        // Click the button
        await button.click();

        // Check for some result, e.g., redirection or UI change
        const resultElement = await driver.wait(until.elementLocated(By.id('result-id')), 10000);
        const resultText = await resultElement.getText();

        // Validate that the expected outcome happened
        expect(resultText).to.equal('Expected Text After Click');
    });
});

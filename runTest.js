const { Builder, By, Key, until } = require("selenium-webdriver")
const Mocha  = require('mocha')
const fs = require('fs')
const assert = require('assert')

const testSuite = [
    './test_suite/homePageTest.js',
    './test_suite/blogPostsTest.js',
    './test_suite/blogPageTest.js',
    './test_suite/newsletterPageTest.js',
]

async function runTestSuite(testPath) {
    const mocha = new Mocha();
    mocha.addFile(testPath);

    return new Promise((resolve, reject) => {
        mocha.run((failures) => {
            if(failures) {
                console.error("Test execution failed for", testPath)
                reject(new Error('Test execution failed'))
            } else {
                console.log('Test execution completed successfully for', testPath)
                resolve()
            }
        });
    });
    
}

async function runTestSuiteSequentially() {
    let overallResult = 0;

    for (const testPath of testSuite) {
        console.log('Running Test: ', testPath)
        try {
            await runTestSuite(testPath)
        } catch (error) {
            console.error('Test execution error:', error)
            overallResult = 1;
            break;
        }
    }

    if (overallResult === 0) {
        console.log('All Tests executed successfully.')
        process.exit(0)
    } else {
        console.error('One of the Tests failed.')
        process.exit(1)
    }
}

runTestSuiteSequentially();



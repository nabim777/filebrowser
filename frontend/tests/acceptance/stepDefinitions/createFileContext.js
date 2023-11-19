const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

//import assert
const assert = require("assert")

//import page
const CreateFilePage = require("../pageObjects/CreateFilePage.js");
const createFilePage = new CreateFilePage;

Given('the user adds file {string} with content {string}', async function (filename,content) {
    await createFilePage.createNewFile(filename,content)
});

When('user has added file {string} with content {string}', async function (filename,content) {
    await createFilePage.createNewFile(filename,content)
});

Then('for user there should contain files {string}', async function (fileName) {
    const actualFile = await createFilePage.getFileFoderName(fileName);
    const expectedFile = fileName;
    assert.equal(
        actualFile,
        expectedFile,
        `Expected File to be "${expectedFile}" but receive File "${actualFile}"`
    )
});
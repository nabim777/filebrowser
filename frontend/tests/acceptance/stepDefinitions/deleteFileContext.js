const { Given, When, Then } = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

//import assert
const assert = require("assert")

//import page
const DeleteFilePage = require("../pageObjects/DeleteFilePage.js")
const deleteFilePage = new DeleteFilePage;

When('user has delete file {string}', async function (fileName) {
    await deleteFilePage.deleteFile(fileName);
});
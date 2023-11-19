const { format } = require("util")

class DeleteFilePage {
    constructor() {
        this.fileFolderBoxSelector = '//div[@aria-label="%s"]';
        this.deleteIconSelector = '//button[@title="Delete"]';
        this.deleteButtonSelector = '//button[contains(text(),"Delete")]';
    }
    
    async deleteFile(fileName) {
        await page.locator(format(this.fileFolderBoxSelector,fileName)).click();
        await page.locator(this.deleteIconSelector).click();
        await page.locator(this.deleteButtonSelector).click();
    }
}

module.exports = DeleteFilePage
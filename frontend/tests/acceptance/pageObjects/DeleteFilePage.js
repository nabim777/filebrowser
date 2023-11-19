const { format } = require("util")

class DeleteFilePage {
    constructor() {
        this.fileFolderBoxSelector = '//div[@aria-label="demo.txt"]';
        this.deleteIconSelector = '//button[@title="Delete"]';
        this.deleteButtonSelector = '//button[contains(text(),"Delete")]';
    }
    
    async deleteFile() {
        await page.locator(this.fileFolderBoxSelector).click();
        await page.locator(this.deleteIconSelector).click();
        await page.locator(this.deleteButtonSelector).click();
    }

}

module.exports = DeleteFilePage
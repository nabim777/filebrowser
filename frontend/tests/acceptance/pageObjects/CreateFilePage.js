const { format } = require("util")

class CreateFilePage {
    constructor() {
        //url
        this.url = 'http://localhost:8080'
        this.loginUrl = 'http://localhost:8080/login'
        this.fileUrl = this.url + '/files/'

        //define selectors
        this.uploadButtonSelector = '//button[@title="Upload"]/i';
        this.newFileLabelSelector = '//button[@aria-label="New file"]';
        this.writeNewFileInputSelector = '//input[@class="input input--block"]';
        this.createButtonSelector = '//button[contains(text(),"Create")]';
        this.contentBoxSelector = '//textarea[@class="ace_text-input"]';
        this.saveIconSelector = '//i[contains(text(),"save")]';
        this.closeIconSelector = '//i[contains(text(),"close")]';
        this.fileFolderSelector = '//div[p[contains(text(), "%s")]]//p[@class="name"]'; //div bhitra ko p vanni ko class name gareko hoii
    }

    async createNewFile(filename,content) {
        await page.click(this.newFileLabelSelector);
        await page.fill(this.writeNewFileInputSelector, filename);
        await page.click(this.createButtonSelector);
        // await page.getByRole('textbox').fill(content);
        await page.fill(this.contentBoxSelector,content);
        await page.click(this.saveIconSelector);
        await page.click(this.closeIconSelector);
    }

    async getFileFoderName(fileName){
        return page.innerText(format(this.fileFolderSelector,fileName));
    }
}

module.exports = CreateFilePage
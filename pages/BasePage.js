import {test} from "@playwright/test"


export class BasePage{

    constructor(page){


        this.page=page;
    }

    async getText(selector)
    {
       return await selector.textContent();
    }

    async type(selector, text)
    {
        await selector.fill(text);
        console.log(`****type performed with value ${text} ****`);

            
    }

    async click(selector)
    {
        await selector.click();
        console.log(`****click performed ****`);
    }

    async nagivateToApplication(url)
    {
        await this.page.goto(url);
        console.log(`****navigate to url ${url} ****`);
    }
     async uploadFiles(selector, filePaths)
     {

        await selector.setInputFiles(filePaths);
        console.log(`****file uploaded ${filePaths} ****`);
     }

}
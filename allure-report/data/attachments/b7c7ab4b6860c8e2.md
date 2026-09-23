# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.js >> login to the application
- Location: tests\smoke\login.spec.js:17:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Sign out', { exact: true })

```

# Test source

```ts
  1  | import {test} from "@playwright/test"
  2  | 
  3  | 
  4  | export class BasePage{
  5  | 
  6  |     constructor(page){
  7  | 
  8  | 
  9  |         this.page=page;
  10 |     }
  11 | 
  12 |     async getText(selector)
  13 |     {
  14 |        return await selector.textContent();
  15 |     }
  16 | 
  17 |     async type(selector, text)
  18 |     {
  19 |         await selector.fill(text);
  20 |         console.log(`****type performed with value ${text} ****`);
  21 | 
  22 |             
  23 |     }
  24 | 
  25 |     async click(selector)
  26 |     {
> 27 |         await selector.click();
     |                        ^ Error: locator.click: Target page, context or browser has been closed
  28 |         console.log(`****click performed ****`);
  29 |     }
  30 | 
  31 |     async nagivateToApplication(url)
  32 |     {
  33 |         await this.page.goto(url);
  34 |         console.log(`****navigate to url ${url} ****`);
  35 |     }
  36 |      async uploadFiles(selector, filePaths)
  37 |      {
  38 | 
  39 |         await selector.setInputFiles(filePaths);
  40 |         console.log(`****file uploaded ${filePaths} ****`);
  41 |      }
  42 | 
  43 | }
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.js >> login to the application
- Location: tests\smoke\login.spec.js:14:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Sign out', { exact: true })

```

# Test source

```ts
  1  | import {selectors, test} from "@playwright/test"
  2  | 
  3  | 
  4  | export class BasePage{
  5  | 
  6  |     constructor(page){
  7  |         this.page=page;
  8  |     }
  9  | 
  10 |     async getText(selector)
  11 |     {
  12 |        return await selector.textContent();
  13 |     }
  14 | 
  15 |     async type(selector, text)
  16 |     {
  17 |         await selector.fill(text);
  18 |             
  19 |     }
  20 | 
  21 |     async click(selector)
  22 |     {
> 23 |         await selector.click();
     |                        ^ Error: locator.click: Target page, context or browser has been closed
  24 |     }
  25 | 
  26 |     async nagivateToApplication(url)
  27 |     {
  28 |         await this.page.goto(url);
  29 |     }
  30 |      async uploadFiles(selector, filepath)
  31 |      {
  32 | 
  33 |         await selector.setInputFiles(filepath);
  34 |      }
  35 | 
  36 | }
```
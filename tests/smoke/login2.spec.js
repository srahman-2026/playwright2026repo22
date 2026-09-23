
//login.spec.js file- created under tests folder

import{test, expect} from "@playwright/test"

import {LoginPage} from "../../pages/LoginPage.js";
import { DashboardPage } from "../../pages/DashboardPage.js";


import user from "../../testdata/user.json"


test.describe("login test",{'tags':['smoke','login']},()=>
{
test("login to the application", async({page})=>
{

    //make sure baseURL is uncheck under use: in config.js file
    // baseURL: 'https://freelance-learn-automation.vercel.app',
    await page.goto("/login");

    const loginPage=new LoginPage(page);

   await  loginPage.loginToApplication(user.username,user.password);

   console.log(`test data user for this test ${user.username} and ${user.password}`)


   const dashboardPage=new DashboardPage(page);

   await dashboardPage.clickOnMenuIcon();
   await dashboardPage.clickOnSignOutButton();
   

}

)


})



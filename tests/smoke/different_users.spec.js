
//login.spec.js file- created under tests folder

import { test, expect } from "@playwright/test"

import { LoginPage } from "../../pages/LoginPage.js";
import { DashboardPage } from "../../pages/DashboardPage.js";

// u can give any name, xyz or user, u can give proper name
//import xyz from "../../testdata/user.json"

import multiuser from "../../testdata/allUsers.json";


test.describe("datadriven test for login scenario",{'tags':['datadriven','login']},()=>
{

    for (const user of multiuser) 
    
    {

    test(`login to the application ${user.id}`, async ({ page }) => {

        //make sure baseURL is uncheck under use: in config.js file
        // baseURL: 'https://freelance-learn-automation.vercel.app',
        await page.goto("/login");

        const loginPage = new LoginPage(page);

        await loginPage.loginToApplication(user.username, user.password);

        console.log(`test data user for this test ${user.username} and ${user.password}`)



    });

}git

})







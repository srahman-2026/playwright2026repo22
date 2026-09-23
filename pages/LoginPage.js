import { BasePage } from "./BasePage.js"

export class LoginPage  extends  BasePage{

    constructor(page)
    {

        super(page);
        this.page=page;

        this.usernameField=page.getByPlaceholder("Enter Email");
        this.passwordField=page.getByPlaceholder("Enter Password");
        this.loginButton=page.getByText("Sign in",{exact:true});

        this.newUserSignUpLink=page.getByText("New user? Signup",{exact:true});

        this.errorMessage=page.locator(".errorMessage")
        
      
    }

    async loginToApplication(username,Password)
    {

       await this.type(this.usernameField,username)
        //await this.usernameField.fill(username);

       await this.type(this.passwordField,Password)
       // await this.passwordField.fill(Password);

       await this.click(this.loginButton);
       // await this.loginButton.click();

    }

    async clickOnNewUserSignUpLink()
    {
        await this.click(this.newUserSignUpLink);
        //await this.clickOnNewUserSignUpLink.click()
    }

     async getSystemErrorMessage()
    {

       return await this.getText(this.errorMessage)        
       //return await this.errorMessage.textContent();
    }


}

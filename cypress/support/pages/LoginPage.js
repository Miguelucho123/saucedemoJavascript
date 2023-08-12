/// <reference types="Cypress" />

class LoginPage{

    static openSauceDemo(){
        cy.visit('https://automationteststore.com/');
    }

    static enterUserName(userName){
        cy.get('#user-name').type(userName);
    }

    static enterPassword(password){
        cy.get('#password').type(password);
    }

    static clickOnLoginButton(){
        cy.get('#login-button').click();
    }

}

export default LoginPage;
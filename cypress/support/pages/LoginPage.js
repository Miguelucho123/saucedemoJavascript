/// <reference types="Cypress" />

class LoginPage{

    static openStoreDemo(){
        cy.visit('/');
    }

    static enterUserName(userName){
        cy.get('#loginFrm_loginname').type(userName);
    }

    static enterPassword(password){
        cy.get('#loginFrm_password').type(password);
    }

    static clickOnLoginButton(){
        cy.get('button[title="Login"]').click();
    }

    static goToLoginForm(){
        cy.get('#customer_menu_top').click();
    }

}

export default LoginPage;
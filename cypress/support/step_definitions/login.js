/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";

Given('I enter to store demo page', function(){
   LoginPage.openStoreDemo(); 
});

When('I enter as {string} with the password {string}',function(userName, password){
    LoginPage.goToLoginForm();
    LoginPage.enterUserName(userName);
    LoginPage.enterPassword(password);
    LoginPage.clickOnLoginButton();
})

Then('I should see the header contain {string}', function(text){
    cy.get('.menu_text').should('contain.text', text);

})

Then('I should see the error message {string}',function(message){
    cy.get('.alert').should('contain.text', message);
})
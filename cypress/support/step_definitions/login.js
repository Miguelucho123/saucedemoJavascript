/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";


Given('I enter to sauce page', function(){
    LoginPage.openSauceDemo();
});

When('I enter as {string} with the password {string}',function(userName, password){
    LoginPage.enterPassword(password);
    LoginPage.enterUserName(userName)
    LoginPage.clickOnLoginButton();
})

Then('I should see into URL the {string}', function(text){
    cy.url().should('contain.text', text);
})
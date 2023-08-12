#Author: Miguel Ángel Gutiérrez Echeverri
# language: en
Feature: Checkout flow for sauce page

  @E2E
  Scenario: As user I want to buy any product
    Given I enter to store demo page as "mtestm"
    When I select the product called "Acqua Di Gio Pour Homme"
    And Complete the checkout process validating the total value
    Then Should appear the message "YOUR ORDER HAS BEEN PROCESSED!"
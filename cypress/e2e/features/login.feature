#Author: Miguel Ángel Gutiérrez Echeverri
# language: en
Feature: Tests for each functionality of login for the page sauce

  @LoginSuccess
  Scenario: As standard user I want to login successfully
    Given I enter to store demo page
    When I enter as "mtestm" with the password "mtestm"
    Then I should see the header contain "Welcome back"

  @LoginWrong
  Scenario: As standard user I enter to platform with wrong credentials
    Given I enter to store demo page
    When I enter as "standard_user" with the password "arroz123"
    Then I should see the error message "Error: Incorrect login or password provided."

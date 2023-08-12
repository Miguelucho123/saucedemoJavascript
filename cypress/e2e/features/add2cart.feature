#Author: Miguel Ángel Gutiérrez Echeverri
# language: en
Feature: Testing Cart Scenarios
  @AddProductToCart
  Scenario: As user I want to add one product to the cart successfully
    Given I enter to strore demo page as "mtestm"
    When I select the product called "Absolue Eye Precious Cells"
    Then The cart should see the product into the cart

  @DeleteProductFromCart
  Scenario: As user i want to delete one product from cart
    Given I enter to strore demo as "mtestm"
    When I select the product called "Absolue Eye Precious Cells,Acqua Di Gio Pour Homme"
    And Remove the product called "Acqua Di Gio Pour Homme"
    Then cart list should contain 1 product
